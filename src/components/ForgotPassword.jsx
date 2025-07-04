import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="auth-background">
      <div className="auth-box">
        <h2>Don't worry, Enter your email below and we will</h2>
        <p>send you a link to change password.</p>
        <form className="auth-form">
          <input 
            type="email" 
            placeholder="Email" 
            className="auth-input"
          />
          <button type="submit" className="auth-button submit-button">
            Submit
          </button>
          <Link to="/login" className="auth-button signin-button">
            Sign In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword; 