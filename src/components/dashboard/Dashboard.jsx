const Dashboard = () => {
  const stats = [
    {
      title: 'Total Tickets',
      count: 12,
      color: '#2196F3'
    },
    {
      title: 'Total Solved',
      count: 8,
      color: '#4CAF50'
    },
    {
      title: 'Total Awaiting Approval',
      count: 2,
      color: '#FF5252'
    },
    {
      title: 'Total in Progress',
      count: 2,
      color: '#FFC107'
    }
  ];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card"
            style={{ backgroundColor: stat.color }}
          >
            <h3>{stat.title}</h3>
            <div className="stat-number">{stat.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 