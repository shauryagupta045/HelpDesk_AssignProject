import { useState } from 'react';
import { RiSearch2Line, RiEyeLine, RiTeamLine, RiCloseLine, RiDownload2Line, RiUserAddLine } from 'react-icons/ri';

const TechnicalMyTickets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);

  const tickets = [
    {
      ticketNo: '1234',
      subject: 'Login issue',
      category: 'Access Issue',
      priority: 'High',
      date: '13/08/21',
      status: 'In Progress',
      personInCharge: 'John Doe'
    },
    {
      ticketNo: '1124',
      subject: 'New ticket issue',
      category: 'Access Issue',
      priority: 'Medium',
      date: '14/08/21',
      status: 'On hold',
      personInCharge: 'Jane Smith'
    },
    {
      ticketNo: '1224',
      subject: 'New request',
      category: 'Feedback',
      priority: 'Low',
      date: '13/08/21',
      status: 'Closed',
      personInCharge: 'Mike Johnson'
    },
    {
      ticketNo: '1244',
      subject: 'Ticket submission',
      category: 'Ticketing',
      priority: 'High',
      date: '14/08/21',
      status: 'In Progress',
      personInCharge: 'Sarah Wilson'
    },
    {
      ticketNo: '1114',
      subject: 'Login issue',
      category: 'Access Issue',
      priority: 'High',
      date: '3/08/21',
      status: 'In Progress',
      personInCharge: 'Tom Brown'
    }
  ];

  const handleViewDetails = (ticket) => {
    setSelectedTicket(ticket);
    setShowDetailsModal(true);
  };

  const handleCloseTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowCloseModal(true);
  };

  const handleCreateTeam = (ticket) => {
    setSelectedTicket(ticket);
    setShowTeamModal(true);
  };

  const getStatusClass = (status) => {
    const statusMap = {
      'In Progress': 'status-in-progress',
      'On hold': 'status-on-hold',
      'Closed': 'status-closed'
    };
    return statusMap[status] || '';
  };

  return (
    <div className="my-tickets-container">
      <h2>My Ticket</h2>

      <div className="tickets-controls">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Find ticket" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearch2Line className="search-icon" />
        </div>
        
        <div className="entries-control">
          <span>Show:</span>
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
              <th>Category</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Status</th>
              <th>Person in charge</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketNo}>
                <td className="ticket-number">{ticket.ticketNo}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.category}</td>
                <td>
                  <span className={`priority-badge priority-${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td>{ticket.date}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.personInCharge}</td>
                <td className="action-buttons">
                  <button onClick={() => handleViewDetails(ticket)} title="View Details">
                    <RiEyeLine />
                  </button>
                  <button onClick={() => handleCreateTeam(ticket)} title="Create Team">
                    <RiTeamLine />
                  </button>
                  <button onClick={() => handleCloseTicket(ticket)} title="Close Ticket">
                    <RiCloseLine />
                  </button>
                  <button title="Download">
                    <RiDownload2Line />
                  </button>
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

      {/* Ticket Details Modal */}
      {showDetailsModal && selectedTicket && (
        <div className="modal-overlay">
          <div className="modal-content ticket-details-modal">
            <div className="modal-header">
              <h3>Ticket Details</h3>
              <button className="modal-close" onClick={() => setShowDetailsModal(false)}>×</button>
            </div>
            <div className="ticket-info">
              <p><strong>Ticket No:</strong> {selectedTicket.ticketNo}</p>
              <p><strong>Date:</strong> {selectedTicket.date}</p>
              <p><strong>Name:</strong></p>
              <p><strong>Dept:</strong></p>
              <p><strong>Title:</strong></p>
              <p><strong>Description:</strong></p>
              <p><strong>Category:</strong> {selectedTicket.category}</p>
              <p><strong>Type:</strong></p>
              <p><strong>Priority:</strong> {selectedTicket.priority}</p>
              <p><strong>Status:</strong> {selectedTicket.status}</p>
              <p><strong>Attachment:</strong></p>
            </div>
            <div className="modal-actions">
              <button className="update-btn">Update</button>
              <button className="close-btn" onClick={() => setShowDetailsModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Close Ticket Modal */}
      {showCloseModal && selectedTicket && (
        <div className="modal-overlay">
          <div className="modal-content close-ticket-modal">
            <div className="modal-header">
              <h3>My Ticket - Close Ticket</h3>
              <button className="modal-close" onClick={() => setShowCloseModal(false)}>×</button>
            </div>
            <div className="modal-form">
              <div className="form-group">
                <input type="text" placeholder="Ticket No." value={selectedTicket.ticketNo} readOnly />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Team name" />
              </div>
              <div className="form-group">
                <div className="team-member-input">
                  <input type="text" placeholder="Team Member" />
                  <button className="add-member-btn">
                    <RiUserAddLine />
                  </button>
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Remark" rows="4"></textarea>
              </div>
              <div className="modal-actions">
                <button className="close-ticket-btn">Close Ticket</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Creation Modal */}
      {showTeamModal && selectedTicket && (
        <div className="modal-overlay">
          <div className="modal-content team-creation-modal">
            <div className="modal-header">
              <h3>My Ticket - Team Creation</h3>
              <button className="modal-close" onClick={() => setShowTeamModal(false)}>×</button>
            </div>
            <div className="modal-form">
              <div className="form-group">
                <input type="text" placeholder="Ticket No." value={selectedTicket.ticketNo} readOnly />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Team name" />
              </div>
              <div className="form-group">
                <div className="team-member-input">
                  <input type="text" placeholder="Team Member" />
                  <button className="add-member-btn">
                    <RiUserAddLine />
                  </button>
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Remark" rows="4"></textarea>
              </div>
              <div className="modal-actions">
                <button className="create-team-btn">Create Team</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalMyTickets; 