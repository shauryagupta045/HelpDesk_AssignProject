import { RiTicketLine, RiCheckLine, RiTimeLine, RiLoader4Line } from 'react-icons/ri';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TechnicalStats = () => {
  const performanceData = [
    { name: 'Jan', tickets: 65 },
    { name: 'Feb', tickets: 45 },
    { name: 'Mar', tickets: 90 },
    { name: 'Apr', tickets: 75 },
    { name: 'May', tickets: 85 },
    { name: 'Jun', tickets: 55 },
  ];

  return (
    <div className="tech-dashboard-stats">
      <div className="tech-stats-cards">
        <div className="tech-stat-card">
          <div className="tech-stat-icon">
            <RiTicketLine />
          </div>
          <div className="tech-stat-info">
            <h3>Total Tickets</h3>
            <p>12</p>
          </div>
        </div>
        <div className="tech-stat-card">
          <div className="tech-stat-icon">
            <RiCheckLine />
          </div>
          <div className="tech-stat-info">
            <h3>Total Solved</h3>
            <p>8</p>
          </div>
        </div>
        <div className="tech-stat-card">
          <div className="tech-stat-icon">
            <RiTimeLine />
          </div>
          <div className="tech-stat-info">
            <h3>Total Awaiting</h3>
            <p>2</p>
          </div>
        </div>
        <div className="tech-stat-card">
          <div className="tech-stat-icon">
            <RiLoader4Line />
          </div>
          <div className="tech-stat-info">
            <h3>In Progress</h3>
            <p>2</p>
          </div>
        </div>
      </div>

      <div className="tech-performance-chart">
        <h3>Performance Overview</h3>
        <div className="tech-chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tickets" fill="#40E0D0" name="Tickets Handled" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="tech-support-stats">
        <div className="tech-team-stats">
          <h3>Support Team</h3>
          <div className="tech-team-numbers">
            <div className="tech-team-stat">
              <h4>Technical Support</h4>
              <p>3</p>
            </div>
            <div className="tech-team-stat">
              <h4>Operation Team</h4>
              <p>4</p>
            </div>
          </div>
        </div>

        <div className="tech-feedback-stats">
          <h3>Customer Feedback</h3>
          <div className="tech-rating">
            <span className="tech-rating-number">4.5</span>
            <div className="tech-stars">★★★★½</div>
            <p>Based on customer ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalStats; 