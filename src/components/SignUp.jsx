import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message || 'An error occurred during registration');
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
          <button type="submit" className="auth-button signup-button">
            Sign Up
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