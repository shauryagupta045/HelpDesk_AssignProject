import { RiAttachment2 } from 'react-icons/ri';

const TechnicalNewTicket = () => {
  return (
    <div className="new-ticket-container">
      <h2>Create Technical Support Ticket</h2>
      
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
              <option value="software">Software Development</option>
              <option value="hardware">Hardware Support</option>
              <option value="network">Network Infrastructure</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Subject</label>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Technical Category</label>
            <select>
              <option value="">Select Category</option>
              <option value="bug">Bug Fix</option>
              <option value="feature">Feature Request</option>
              <option value="maintenance">System Maintenance</option>
              <option value="security">Security Issue</option>
            </select>
          </div>
          <div className="form-group description-group">
            <label>Technical Description:</label>
            <textarea rows="4" placeholder="Please provide detailed technical information..."></textarea>
            <button type="button" className="attachment-btn">
              <RiAttachment2 />
            </button>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Severity Level</label>
            <select>
              <option value="">Select Severity</option>
              <option value="critical">Critical - System Down</option>
              <option value="major">Major - Significant Impact</option>
              <option value="minor">Minor - Limited Impact</option>
            </select>
          </div>
          <div className="form-group">
            <label>Environment</label>
            <select>
              <option value="">Select Environment</option>
              <option value="production">Production</option>
              <option value="staging">Staging</option>
              <option value="development">Development</option>
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
            <label>Estimated Resolution Time</label>
            <input type="datetime-local" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Technical Notes</label>
          <textarea rows="3" placeholder="Add any technical notes, steps to reproduce, or system details..."></textarea>
        </div>

        <div className="form-group full-width">
          <label>System Information</label>
          <textarea rows="2" placeholder="OS, Browser, Version numbers, etc..."></textarea>
        </div>

        <button type="submit" className="submit-btn">Create Technical Ticket</button>
      </form>
    </div>
  );
};

export default TechnicalNewTicket; 