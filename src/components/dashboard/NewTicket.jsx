import { RiAttachment2 } from 'react-icons/ri';

const NewTicket = () => {
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
            <input type="text" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Subject</label>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <input type="text" />
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
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Priority</label>
            <input type="text" />
          </div>
        </div>

        <div className="captcha-container">
          <div className="g-recaptcha">
            <input type="checkbox" id="robot" />
            <label htmlFor="robot">I'm not a robot</label>
            <img src="/recaptcha.png" alt="reCAPTCHA" className="recaptcha-img" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default NewTicket; 