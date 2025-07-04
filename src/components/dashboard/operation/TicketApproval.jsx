import { useState } from 'react';
import { RiSearch2Line, RiCheckLine, RiCloseLine } from 'react-icons/ri';

const TicketApproval = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const tickets = [
    {
      ticketNo: '1234',
      subject: 'Login issue',
      category: 'Access Issue',
      priority: 'High',
      date: '13/08/21'
    },
    {
      ticketNo: '1124',
      subject: 'New ticket issue',
      category: 'Access Issue',
      priority: 'Medium',
      date: '14/08/21'
    },
    {
      ticketNo: '1224',
      subject: 'New request',
      category: 'Feedback',
      priority: 'Low',
      date: '13/08/21'
    },
    {
      ticketNo: '1244',
      subject: 'Ticket submission',
      category: 'Ticketing',
      priority: 'High',
      date: '14/08/21'
    },
    {
      ticketNo: '1114',
      subject: 'Login issue',
      category: 'Access Issue',
      priority: 'High',
      date: '3/08/21'
    }
  ];

  return (
    <div className="ticket-approval-container">
      <h2>Ticket Approval</h2>

      <div className="approval-controls">
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

      <div className="approval-table">
        <table>
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Action</th>
              <th>Assign to</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketNo}>
                <td>{ticket.ticketNo}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.category}</td>
                <td>
                  <span className={`priority-badge priority-${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td>{ticket.date}</td>
                <td className="action-buttons">
                  <button className="approve-btn">
                    <RiCheckLine />
                  </button>
                  <button className="reject-btn">
                    <RiCloseLine />
                  </button>
                </td>
                <td>
                  <select className="assign-select">
                    <option value="">Select</option>
                    <option value="tech1">Tech Support 1</option>
                    <option value="tech2">Tech Support 2</option>
                    <option value="tech3">Tech Support 3</option>
                  </select>
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
    </div>
  );
};

export default TicketApproval; 