import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import API_URLS from '../config/api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user' // default role
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      console.log('Attempting login with:', { email: formData.email, role: formData.role });
      console.log('Login URL:', API_URLS.login);
      
      const response = await fetch(API_URLS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.token) {
        // Store the token and role in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('userEmail', data.email);
        
        // Navigate based on role
        switch(data.role) {
          case 'admin':
            navigate('/dashboard/admin');
            break;
          case 'technical':
            navigate('/dashboard/technical');
            break;
          case 'operation':
            navigate('/dashboard/operation');
            break;
          default:
            navigate('/dashboard/user');
        }
      } else {
        throw new Error('No token received from server');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Failed to login. Please try again.');
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
        {error && (
          <div className="error-message" style={{ 
            color: 'red', 
            marginBottom: '10px', 
            padding: '10px', 
            backgroundColor: '#ffe6e6', 
            borderRadius: '4px',
            wordBreak: 'break-word'
          }}>
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
            className="auth-button login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
          <div className="auth-links">
            <Link to="/forgot-password" className="forgot-link">Forgot password</Link>
            <Link to="/signup" className="auth-link">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 