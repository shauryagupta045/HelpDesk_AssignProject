import { useState } from 'react';
import { RiSearch2Line, RiStarFill } from 'react-icons/ri';
import './User.css';

const UserMyTickets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    {
      ticketNo: '1234',
      subject: 'Login issue',
      status: 'In Progress',
      supportBy: 'Tech support',
      date: '13/08/21',
      rating: 5
    },
    {
      ticketNo: '1124',
      subject: 'New ticket task',
      status: 'On hold',
      supportBy: 'Operation team',
      date: '14/08/21',
      rating: 4
    },
    {
      ticketNo: '1224',
      subject: 'New request',
      status: 'Closed',
      supportBy: 'Tech support',
      date: '13/08/21',
      rating: 3
    },
    {
      ticketNo: '1244',
      subject: 'Ticket submission',
      status: 'In Progress',
      supportBy: 'Operation team',
      date: '14/08/21',
      rating: 4
    },
    {
      ticketNo: '1114',
      subject: 'Login issue',
      status: 'In Progress',
      supportBy: 'Tech support',
      date: '3/08/21',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <RiStarFill 
        key={index}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  const getStatusClass = (status) => {
    const statusMap = {
      'In Progress': 'status-in-progress',
      'On hold': 'status-on-hold',
      'Closed': 'status-closed'
    };
    return statusMap[status] || '';
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="user-dashboard-container">
      <h2>My Tickets</h2>
      
      <div className="tickets-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearch2Line className="search-icon" />
        </div>
        
        <div className="entries-control">
          <span>Show</span>
          <select 
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <span>Entries</span>
        </div>
      </div>

      <div className="tickets-table">
        <table>
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Support by</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketNo}>
                <td className="ticket-number">
                  <button 
                    onClick={() => handleTicketClick(ticket)}
                    className="ticket-link"
                  >
                    {ticket.ticketNo}
                  </button>
                </td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.supportBy}</td>
                <td>{ticket.date}</td>
                <td className="rating-stars">
                  {renderStars(ticket.rating)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="showing-entries">
          Showing 1 to 5 of 5 entries
        </div>
        <div className="pagination">
          <button disabled>«</button>
          <button className="active">1</button>
          <button disabled>»</button>
        </div>
      </div>

      {selectedTicket && (
        <div className="ticket-details-modal">
          <div className="modal-content">
            <h3>Ticket Details</h3>
            <div className="ticket-info">
              <p><strong>Ticket No.:</strong> {selectedTicket.ticketNo}</p>
              <p><strong>Date:</strong> {selectedTicket.date}</p>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Dept.:</strong> IT Department</p>
              <p><strong>Title:</strong> {selectedTicket.subject}</p>
              <p><strong>Description:</strong> Issue with system login functionality</p>
              <p><strong>Category:</strong> Technical</p>
              <p><strong>Type:</strong> Bug Fix</p>
              <p><strong>Priority:</strong> High</p>
              <p><strong>Status:</strong> {selectedTicket.status}</p>
              <p><strong>Attachment:</strong> No attachments</p>
            </div>
            <button 
              className="close-modal-btn"
              onClick={() => setSelectedTicket(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMyTickets; 