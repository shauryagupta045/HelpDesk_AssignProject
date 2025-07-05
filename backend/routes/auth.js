const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log('Signup attempt for:', email);

    if (!email || !password || !role) {
      return res.status(400).json({ message: 'Please provide email, password and role' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ email, password, role });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      message: 'Error creating user',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log('Login attempt:', { email, role, timestamp: new Date().toISOString() });

    // Check if all required fields are present
    if (!email || !password || !role) {
      console.log('Missing required fields');
      return res.status(400).json({ message: 'Please provide email, password and role' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    console.log('User found:', user ? 'Yes' : 'No');
    
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if role matches
    console.log('Role check:', { expected: role, actual: user.role });
    if (user.role !== role) {
      console.log('Role mismatch');
      return res.status(401).json({ message: 'Invalid role for this user' });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    console.log('Password match:', isMatch ? 'Yes' : 'No');
    
    if (!isMatch) {
      console.log('Password mismatch');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Verify JWT_SECRET is set
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error('JWT_SECRET not configured');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Generate token
    const token = jwt.sign(
      { 
        userId: user._id, 
        role: user.role,
        email: user.email 
      },
      jwtSecret,
      { expiresIn: '24h' }
    );

    console.log('Login successful:', { email, role });

    // Send response
    res.json({
      token,
      role: user.role,
      email: user.email,
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Login error:', {
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({ 
      message: 'Error logging in',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router; 