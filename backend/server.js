const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

// Load environment variables from .env file (only used in development)
dotenv.config();

const app = express();

// Configure CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174', 'https://help-desk-assign-project.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Request Headers:', req.headers);
  console.log('Request Body:', req.body);
  next();
});

// Root route for health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'online',
    message: 'Backend server is running',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/helpdesk')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', {
      message: err.message,
      code: err.code
    });
  });

// Routes
app.use('/api/auth', authRoutes);

// Basic test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Server is working',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: err.message,
    path: req.path,
    method: req.method
  });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Route not found',
    path: req.path,
    method: req.method,
    availableRoutes: [
      '/',
      '/api/test',
      '/api/auth/*'
    ]
  });
});

// Start server only in development mode
// In production (Vercel), the server is handled by serverless functions
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`
    🚀 Server running in ${process.env.NODE_ENV || 'development'} mode
    🔊 Listening on port ${PORT}
    📱 Local: http://localhost:${PORT}
    `);
  });
}

// Export the app for Vercel
module.exports = app; 