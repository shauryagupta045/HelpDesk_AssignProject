import { RiAttachment2 } from 'react-icons/ri';

const OperationNewTicket = () => {
  return (
    <div className="new-ticket-container">
      <h2>Create New Ticket</h2>
      
      <form className="new-ticket-form">
        <div className="form-row">
          <div className="form-group">
            <label>Ticket No.</label>
            <input type="text" disabled />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="text" disabled />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Department</label>
            <select>
              <option value="">Select Department</option>
              <option value="technical">Technical Support</option>
              <option value="operations">Operations</option>
              <option value="admin">Administration</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Subject</label>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <select>
              <option value="">Select Category</option>
              <option value="technical">Technical Issue</option>
              <option value="access">Access Management</option>
              <option value="service">Service Request</option>
              <option value="incident">Incident Report</option>
            </select>
          </div>
          <div className="form-group description-group">
            <label>Description:</label>
            <textarea rows="4"></textarea>
            <button type="button" className="attachment-btn">
              <RiAttachment2 />
            </button>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Type</label>
            <select>
              <option value="">Select Type</option>
              <option value="urgent">Urgent</option>
              <option value="normal">Normal</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
          <div className="form-group">
            <label>Assign To</label>
            <select>
              <option value="">Select Team Member</option>
              <option value="tech1">Technical Support 1</option>
              <option value="tech2">Technical Support 2</option>
              <option value="tech3">Technical Support 3</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Priority</label>
            <select>
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label>Expected Resolution Time</label>
            <input type="datetime-local" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Additional Notes</label>
          <textarea rows="3"></textarea>
        </div>

        <button type="submit" className="submit-btn">Create Ticket</button>
      </form>
    </div>
  );
};

export default OperationNewTicket; 