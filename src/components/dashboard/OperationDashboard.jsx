import { RiBarChartBoxLine, RiCustomerService2Line, RiTeamLine, RiStarFill } from 'react-icons/ri';

const OperationDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card" style={{ backgroundColor: '#2196F3' }}>
          <h3>Total Tickets</h3>
          <div className="stat-number">12</div>
        </div>
        <div className="stat-card" style={{ backgroundColor: '#4CAF50' }}>
          <h3>Total Solved</h3>
          <div className="stat-number">8</div>
        </div>
        <div className="stat-card" style={{ backgroundColor: '#FF5252' }}>
          <h3>Total Awaiting Approval</h3>
          <div className="stat-number">2</div>
        </div>
        <div className="stat-card" style={{ backgroundColor: '#FFC107' }}>
          <h3>Total in Progress</h3>
          <div className="stat-number">2</div>
        </div>
      </div>

      <div className="dashboard-info-grid">
        {/* Performance Chart */}
        <div className="performance-chart">
          <RiBarChartBoxLine className="chart-placeholder" />
        </div>

        {/* Team Info */}
        <div className="team-info">
          <div className="team-stats">
            <div className="team-stat">
              <RiCustomerService2Line className="team-icon" />
              <div className="team-count">
                <span>3</span>
                <p>Technical Support</p>
              </div>
            </div>
            <div className="team-stat">
              <RiTeamLine className="team-icon" />
              <div className="team-count">
                <span>4</span>
                <p>Operation Team</p>
              </div>
            </div>
          </div>

          {/* Customer Feedback */}
          <div className="customer-feedback">
            <h3>Customer Feedback</h3>
            <div className="feedback-stars">
              {[1, 1, 1, 1, 0.5].map((star, index) => (
                <RiStarFill 
                  key={index}
                  className={`star ${star === 0.5 ? 'half-star' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationDashboard; 