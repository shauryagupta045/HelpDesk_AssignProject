import { RiSearch2Line, RiStarFill } from 'react-icons/ri';
import { useState } from 'react';

const MyTickets = () => {
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

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'in progress':
        return 'status-progress';
      case 'on hold':
        return 'status-hold';
      case 'closed':
        return 'status-closed';
      default:
        return '';
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <RiStarFill 
        key={index}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="my-tickets-container">
      <h2>List of Ticket</h2>
      
      <div className="tickets-controls">
        <div className="search-box">
          <input type="text" placeholder="Find ticket" />
          <RiSearch2Line className="search-icon" />
        </div>
        
        <div className="entries-control">
          <span>Show</span>
          <select defaultValue="10">
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
              <tr key={ticket.ticketNo} onClick={() => handleTicketClick(ticket)}>
                <td className="ticket-number">{ticket.ticketNo}</td>
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
              <p><strong>Ticket No:</strong> {selectedTicket.ticketNo}</p>
              <p><strong>Date:</strong> {selectedTicket.date}</p>
              <p><strong>Name:</strong></p>
              <p><strong>Dept:</strong></p>
              <p><strong>Title:</strong> {selectedTicket.subject}</p>
              <p><strong>Description:</strong></p>
              <p><strong>Category:</strong></p>
              <p><strong>Type:</strong></p>
              <p><strong>Priority:</strong></p>
              <p><strong>Status:</strong> {selectedTicket.status}</p>
              <p><strong>Attachment:</strong></p>
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

export default MyTickets; 