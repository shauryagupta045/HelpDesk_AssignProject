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
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174', 'https://help-desk-assign-project.vercel.app', 'https://help-desk-assign-project-daja.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  exposedHeaders: ['set-cookie']
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

// MongoDB Connection Status
let mongoConnected = false;

// MongoDB Connection with retry logic
const connectWithRetry = async () => {
  // Use different connection strings for development and production
  const mongoURI = process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI // Should be Atlas URL in production
    : process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/helpdesk'; // Local fallback for development

  if (!mongoURI) {
    console.error('MONGODB_URI is not defined in environment variables');
    return;
  }

  // Log connection attempt (without credentials)
  const sanitizedURI = mongoURI.includes('@')
    ? mongoURI.replace(/\/\/(.*):(.*)@/, '//***:***@')
    : mongoURI;
  console.log(`Attempting to connect to MongoDB (${process.env.NODE_ENV || 'development'} mode):`, sanitizedURI);

  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('📦 Connected to MongoDB');
    mongoConnected = true;
  } catch (err) {
    console.error('MongoDB connection error:', {
      message: err.message,
      code: err.code,
      timestamp: new Date().toISOString()
    });
    mongoConnected = false;
    
    if (process.env.NODE_ENV === 'production') {
      console.error('Production MongoDB connection failed. Please check your Atlas connection string and network access.');
    } else {
      console.error('Development MongoDB connection failed. Please check if MongoDB is running locally.');
    }

    // Retry connection after 5 seconds
    console.log('Retrying connection in 5 seconds...');
    setTimeout(connectWithRetry, 5000);
  }
};

// Initial MongoDB connection
connectWithRetry();

// Root route for health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'online',
    message: 'Backend server is running',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    mongodbStatus: mongoConnected ? 'connected' : 'disconnected',
    mongodbEnvironment: process.env.NODE_ENV === 'production' ? 'Atlas' : 'Local',
    mongodbURI: process.env.MONGODB_URI ? 'configured' : 'missing'
  });
});

// MongoDB connection test endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    // Test the connection
    const connectionState = mongoose.connection.readyState;
    const stateMap = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };

    // Try to perform a simple operation
    const collections = await mongoose.connection.db.listCollections().toArray();
    
    res.json({
      status: 'success',
      connectionState: stateMap[connectionState],
      connected: connectionState === 1,
      collections: collections.map(col => col.name),
      environment: process.env.NODE_ENV,
      mongodbEnvironment: process.env.NODE_ENV === 'production' ? 'Atlas' : 'Local',
      mongodbURI: process.env.MONGODB_URI ? 'configured' : 'missing',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Database connection test failed',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      connectionState: mongoose.connection.readyState,
      environment: process.env.NODE_ENV,
      mongodbEnvironment: process.env.NODE_ENV === 'production' ? 'Atlas' : 'Local',
      mongodbURI: process.env.MONGODB_URI ? 'configured' : 'missing',
      timestamp: new Date().toISOString()
    });
  }
});

// Routes
app.use('/api/auth', authRoutes);

// Basic test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Server is working',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    mongodbStatus: mongoConnected ? 'connected' : 'disconnected',
    mongodbEnvironment: process.env.NODE_ENV === 'production' ? 'Atlas' : 'Local'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', {
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    timestamp: new Date().toISOString()
  });
  
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error',
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
      '/api/test-db',
      '/api/auth/*'
    ]
  });
});

// Start server only in development mode
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`
    🚀 Server running in ${process.env.NODE_ENV || 'development'} mode
    🔊 Listening on port ${PORT}
    📱 Local: http://localhost:${PORT}
    💾 Database: ${process.env.NODE_ENV === 'production' ? 'MongoDB Atlas' : 'Local MongoDB'}
    `);
  });
}

// Export the app for Vercel
module.exports = app; 