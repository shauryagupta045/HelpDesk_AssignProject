const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long']
  },
  role: {
    type: String,
    enum: ['user', 'technical', 'operation', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  try {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    
    // Generate a salt with a cost factor of 10
    const salt = await bcrypt.genSalt(10);
    
    // Hash the password using the generated salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    console.error('Error hashing password:', error);
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    if (!candidatePassword) {
      throw new Error('Password is required');
    }
    
    if (!this.password) {
      throw new Error('User has no password set');
    }

    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    console.error('Error comparing password:', error);
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User; 