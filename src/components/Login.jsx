import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    // For now, we'll just redirect to the role selection page
    navigate('/role-selection');
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
        <form className="auth-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            className="auth-input"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="auth-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="auth-button login-button">
            Sign In
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