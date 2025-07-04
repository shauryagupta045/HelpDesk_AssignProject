import { RiUser3Line, RiStarFill } from 'react-icons/ri';

const TechnicalPerformance = () => {
  const operationDetails = {
    name: "Technical Support Name",
    contact: "0123456789",
    department: "IT Support",
    stats: {
      totalTicketHandle: 5,
      ticketSolved: 2,
      ticketPending: 1,
      ticketInProgress: 2,
      rating: 5
    }
  };

  const operationTeam = [
    { id: 1, name: "Technical Support 1" },
    { id: 2, name: "Technical Support 2" },
    { id: 3, name: "Technical Support 3" }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <RiStarFill 
        key={index}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div className="performance-container">
      <h2>Performance</h2>

      <div className="performance-content">
        <div className="main-performance-card">
          <div className="profile-section">
            <div className="profile-image">
              <RiUser3Line className="user-icon" />
            </div>
            <div className="profile-info">
              <h3>{operationDetails.name}</h3>
              <p>Contact No: {operationDetails.contact}</p>
              <p>Department: {operationDetails.department}</p>
            </div>
          </div>

          <div className="performance-stats">
            <div className="stat-item">
              <span className="stat-label">Total Ticket Handle</span>
              <span className="stat-value">{operationDetails.stats.totalTicketHandle}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Ticket Solved</span>
              <span className="stat-value">{operationDetails.stats.ticketSolved}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Ticket Pending</span>
              <span className="stat-value">{operationDetails.stats.ticketPending}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Ticket in progress</span>
              <span className="stat-value">{operationDetails.stats.ticketInProgress}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Rating</span>
              <span className="star-rating">
                {renderStars(operationDetails.stats.rating)}
              </span>
            </div>
          </div>
        </div>

        <div className="operation-team-list">
          {operationTeam.map(member => (
            <div key={member.id} className="team-member-card">
              <div className="member-image">
                <RiUser3Line className="user-icon" />
              </div>
              <span className="member-name">{member.name}</span>
              <button className="view-details-btn">View details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalPerformance; 