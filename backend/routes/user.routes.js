const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Task = require('../models/task.model');
const Leave = require('../models/leave.model'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


// Signup API
router.post('/signup', async (req, res) => {
        console.log(req.body);
        
        const { employeeId, fullName, email, password } = req.body;
        if (!employeeId || !fullName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        try {
            // Check if the email already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
             
              
            // Create the user
            const newUser = await User.create({
                employeeId,
                fullName,
                email,
                password: hashedPassword
            });

            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }
);

// Login API
// router.post('/login',
//     async (req, res) => {
//         const { employeeId, password } = req.body;

//         try {
//             const user = await User.findOne({ employeeId });
//             if (!user) {
//                 return res.status(400).json({ message: 'Invalid email or password' });
//             }

//             const isMatch = await bcrypt.compare(password, user.password);
//             if (!isMatch) {
//                 return res.status(400).json({ message: 'Invalid email or password' });
//             }

//             const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//             res.cookie('token', token, { httpOnly: true });
//             res.status(200).json({ message: 'Login successful' });
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ message: 'Server error' });
//         }
//     }
// );

router.post('/login', async (req, res) => {
    console.log('Login request received:', req.body);  // Log the request body
    const { employeeId, password } = req.body
  
    try {
      // Check if employeeId and password are provided
      if (!employeeId || !password) {
        return res.status(400).json({ message: 'Employee ID and password are required' });
      }
  
      // Find the user by employeeId
      const user = await User.findOne({ employeeId });
      if (!user) {
        return res.status(400).json({ message: 'Invalid employee ID or password' });
      }
  
      // Compare password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      // Generate JWT token if authentication is successful
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true });
  
      res.status(200).json({ message: 'Login successful' });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.post("/tasks", async (req, res) => {
    try {
      const { taskTitle, status, hoursSpent, progressUpdate, dueDate} = req.body;
      await Task.create({
        taskTitle:taskTitle,
        status:status,
        hoursSpent:hoursSpent,
        progressUpdate:progressUpdate,
      })
  
      // Validate required fields
      if (!taskTitle || !status || !hoursSpent || !progressUpdate) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Log the task (you can replace this with database logic if needed)
      console.log(req.body);
      
      console.log("Task submitted:", { taskTitle, status, hoursSpent, progressUpdate});
  
      // Respond to the client
      res.status(201).json({ message: "Task submitted successfully!" });
    } catch (error) {
      console.error("Error submitting task:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

  router.post("/leave", async (req, res) => {
    try {
      const { leaveType, startDate, endDate, reason } = req.body;
  
      console.log("Received request body:", req.body); // Log the request body
  
      // Validate required fields
      if (!leaveType || !startDate || !endDate || !reason) {
        console.log("Validation failed: Missing required fields");
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }
  
      // Validate date range
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      if (start > end) {
        console.log("Validation failed: Invalid date range");
        return res.status(400).json({
          success: false,
          message: "End date must be after start date",
        });
      }
  
      // Create leave request
      const leave = await Leave.create({
        leaveType,
        startDate,
        endDate,
        reason,
      });
  
      console.log("Leave request created successfully:", leave);
  
      // Return success response
      res.status(201).json({
        success: true,
        message: "Leave request submitted successfully",
        data: leave,
      });
  
    } catch (error) {
      console.error("Error in leave route:", error.message); // Log the error details
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  }); 

module.exports = router;