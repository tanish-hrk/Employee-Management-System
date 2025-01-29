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
    const adminExists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (!adminExists) {
      await Admin.create({
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        name: 'Super Admin',
        role: 'superadmin'
      });
      console.log('Initial admin account created');
    }
  } catch (error) {
    console.error('Error creating initial admin:', error);
  }
};

// Call this when your application starts
createInitialAdmin();

// Admin login route
router.post('/login', async (req, res) => {
  console.log('Admin login request received:', req.body);
  const { email, password } = req.body;

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(403).json({ message: 'Account is deactivated' });
    }

    // Verify password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Update last login time
    admin.lastLogin = new Date();
    await admin.save();

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: admin._id,
        email: admin.email,
        role: admin.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new admin route (protected - only super admin can create other admins)
router.post('/create', async (req, res) => {
  const { email, password, name, role } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create new admin
    const newAdmin = await Admin.create({
      email,
      password,
      name,
      role: role || 'admin'
    });

    res.status(201).json({
      message: 'Admin created successfully',
      admin: {
        id: newAdmin._id,
        email: newAdmin.email,
        name: newAdmin.name,
        role: newAdmin.role
      }
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
    const isMatch = await admin.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Update password
    admin.password = newPassword;
    await admin.save();

    res.status(200).json({ message: 'Password updated successfully' });

  } catch (err) {
    console.error('Password update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;