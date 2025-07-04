import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="auth-background">
      <div className="auth-box">
        <h2>Helpdesk System</h2>
        <p>Sign up here</p>
        <form className="auth-form">
          <input 
            type="text" 
            placeholder="Username" 
            className="auth-input"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="auth-input"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="auth-input"
          />
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