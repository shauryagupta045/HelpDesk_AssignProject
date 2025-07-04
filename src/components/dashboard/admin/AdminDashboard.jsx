import { RiBarChartBoxLine, RiCustomerService2Line, RiTeamLine, RiStarFill } from 'react-icons/ri';
import './Admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h1>Dashboard</h1>
      
      <div className="admin-stats-grid">
        <div className="admin-stat-card" style={{ backgroundColor: '#2196F3' }}>
          <h3>Total Tickets</h3>
          <div className="admin-stat-number">12</div>
        </div>
        <div className="admin-stat-card" style={{ backgroundColor: '#4CAF50' }}>
          <h3>Total Solved</h3>
          <div className="admin-stat-number">8</div>
        </div>
        <div className="admin-stat-card" style={{ backgroundColor: '#FF5252' }}>
          <h3>Total Awaiting Approval</h3>
          <div className="admin-stat-number">2</div>
        </div>
        <div className="admin-stat-card" style={{ backgroundColor: '#FFC107' }}>
          <h3>Total in Progress</h3>
          <div className="admin-stat-number">2</div>
        </div>
      </div>

      <div className="admin-dashboard-info-grid">
        {/* Performance Chart */}
        <div className="admin-performance-chart">
          <RiBarChartBoxLine className="admin-chart-placeholder" />
        </div>

        {/* Team Info */}
        <div className="admin-team-info">
          <div className="admin-team-stats">
            <div className="admin-team-stat">
              <RiCustomerService2Line className="admin-team-icon" />
              <div className="admin-team-count">
                <span>3</span>
                <p>Technical Support</p>
              </div>
            </div>
            <div className="admin-team-stat">
              <RiTeamLine className="admin-team-icon" />
              <div className="admin-team-count">
                <span>4</span>
                <p>Operation Team</p>
              </div>
            </div>
          </div>

          {/* Customer Feedback */}
          <div className="admin-customer-feedback">
            <h3>Customer Feedback</h3>
            <div className="admin-feedback-stars">
              {[1, 1, 1, 1, 0.5].map((star, index) => (
                <RiStarFill 
                  key={index}
                  className={`admin-star ${star === 0.5 ? 'admin-half-star' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 