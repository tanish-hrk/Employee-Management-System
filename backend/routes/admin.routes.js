const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Create initial admin if none exists
const createInitialAdmin = async () => {
  try {
    const adminExists = await Admin.findOne({ adminId: process.env.ADMIN_ID });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

      await Admin.create({
        adminId: process.env.ADMIN_ID,
        password: hashedPassword,
        name: 'Super Admin',
        role: 'superadmin',
      });

      console.log('Initial admin account created');
    } else {
      console.log('Initial admin already exists');
    }
  } catch (error) {
    console.error('Error creating initial admin:', error);
  }
};

// Call this when the application starts
createInitialAdmin();

// Admin login route
router.post('/login', async (req, res) => {
  console.log('Admin login request received:', req.body);
  const { adminId, password } = req.body;

  try {
    if (!adminId || !password) {
      return res.status(400).json({ message: 'Admin ID and password are required' });
    }

    // Find admin by adminId
    const admin = await Admin.findOne({ adminId });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // ❌ Removed the isActive check

    // Verify password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Update last login time
    admin.lastLogin = new Date();
    await admin.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, adminId: admin.adminId, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set token in secure httpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({
      message: 'Login successful',
      token,
      admin: { id: admin._id, adminId: admin.adminId, name: admin.name, role: admin.role },
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Create new admin route (only super admin can create others)
router.post('/create', async (req, res) => {
  const { adminId, password, name, role } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ adminId });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      adminId,
      password: hashedPassword,
      name,
      role: role || 'admin',
    });

    res.status(201).json({
      message: 'Admin created successfully',
      admin: {
        id: newAdmin._id,
        adminId: newAdmin.adminId,
        name: newAdmin.name,
        role: newAdmin.role,
      },
    });

  } catch (err) {
    console.error('Admin creation error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update admin password
router.put('/update-password', async (req, res) => {
  const { currentPassword, newPassword, adminId } = req.body;

  try {
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Hash new password before saving
    admin.password = await bcrypt.hash(newPassword, 10);
    await admin.save();

    res.status(200).json({ message: 'Password updated successfully' });

  } catch (err) {
    console.error('Password update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
