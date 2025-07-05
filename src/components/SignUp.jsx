import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import API_URLS from '../config/api';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(API_URLS.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Show success message
      setError('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message || 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-background">
      <div className="auth-box">
        <h2>Helpdesk System</h2>
        <p>Sign up here</p>
        {error && (
          <div 
            className="message" 
            style={{ 
              color: error.includes('successful') ? 'green' : 'red',
              marginBottom: '10px',
              padding: '10px',
              backgroundColor: error.includes('successful') ? '#e6ffe6' : '#ffe6e6',
              borderRadius: '4px'
            }}
          >
            {error}
          </div>
        )}
        <form className="auth-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            className="auth-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="auth-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            className="auth-input"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="user">User</option>
            <option value="technical">Technical</option>
            <option value="operation">Operation</option>
            <option value="admin">Admin</option>
          </select>
          <button 
            type="submit" 
            className="auth-button signup-button"
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
          <div className="auth-links">
            <Link to="/forgot-password" className="forgot-link">Forgot password</Link>
            <Link to="/login" className="auth-link">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp; 