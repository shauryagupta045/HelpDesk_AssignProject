import { useNavigate } from 'react-router-dom';
import { RiUser3Line, RiTeamLine, RiCustomerService2Line, RiAdminLine } from 'react-icons/ri';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    // In a real app, we would store the role in context/state management
    localStorage.setItem('userRole', role);
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="role-selection-container">
      <div className="role-selection-content">
        <div className="role-info-text">
          <h2>Welcome to Helpdesk System</h2>
          <p>This is a demo application without backend integration. Please select your role to continue:</p>
        </div>

        <div className="role-buttons">
          <button 
            className="role-button"
            onClick={() => handleRoleSelect('user')}
          >
            <RiUser3Line className="role-icon" />
            Continue as User
          </button>

          <button 
            className="role-button"
            onClick={() => handleRoleSelect('operation')}
          >
            <RiTeamLine className="role-icon" />
            Continue as Operation Team
          </button>

          <button 
            className="role-button"
            onClick={() => handleRoleSelect('technical')}
          >
            <RiCustomerService2Line className="role-icon" />
            Continue as Technical Support
          </button>

          <button 
            className="role-button"
            onClick={() => handleRoleSelect('admin')}
          >
            <RiAdminLine className="role-icon" />
            Continue as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection; 