import { useState } from 'react';
import './User.css';
import { RiAttachment2 } from 'react-icons/ri';

const UserNewTicket = () => {
  const [ticketData, setTicketData] = useState({
    ticketNo: '',
    date: '',
    name: '',
    department: '',
    subject: '',
    category: '',
    description: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(ticketData);
  };

  return (
    <div className="user-dashboard-container">
      <h2>Create New Ticket</h2>
      <form className="new-ticket-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ticketNo">Ticket No.</label>
            <input
              type="text"
              id="ticketNo"
              name="ticketNo"
              value={ticketData.ticketNo}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={ticketData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={ticketData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              name="department"
              value={ticketData.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Operations">Operations</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={ticketData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={ticketData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Technical">Technical</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Network">Network</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              value={ticketData.type}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
              <option value="Support">Support</option>
            </select>
          </div>
        </div>

        <div className="form-group description-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={ticketData.description}
            onChange={handleChange}
            rows="6"
          />
          <button type="button" className="attachment-btn">
            📎
          </button>
        </div>

        <button type="submit" className="submit-btn">
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default UserNewTicket; 