import { useState } from 'react';
import { RiEditLine, RiStarFill } from 'react-icons/ri';

const UserProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: 'JohnDoe',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    email: 'john@example.com',
    realName: 'John Doe',
    contactNumber: '+1234567890',
    department: 'IT',
    accessLevel: 'User',
    projectAccessLevel: 'Level 1'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the user data
    setIsEditMode(false);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission
  };

  if (isEditMode) {
    return (
      <div className="user-profile-container">
        <div className="edit-profile-section">
          <h2>User Profile</h2>
          <div className="edit-form-container">
            <h3 className="edit-account-header">Edit Account</h3>
            <form onSubmit={handleSubmit} className="edit-profile-form">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="realName"
                  placeholder="Real Name"
                  value={formData.realName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="accessLevel"
                  placeholder="Access Level"
                  value={formData.accessLevel}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="projectAccessLevel"
                  placeholder="Project Access Level"
                  value={formData.projectAccessLevel}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="update-user-btn">
                Update User
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="user-profile-container">
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image-container">
              <div className="profile-image">
                <img src="/user-placeholder.png" alt="Profile" />
              </div>
              <button className="edit-icon" onClick={() => setIsEditMode(true)}>
                <RiEditLine />
              </button>
            </div>
            <div className="profile-info">
              <p className="info-item">Username: {formData.username}</p>
              <p className="info-item">Contact Number: {formData.contactNumber}</p>
              <p className="info-item">Email: {formData.email}</p>
              <p className="info-item">Department: {formData.department}</p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <h3>Give Your Feedback</h3>
          <form onSubmit={handleFeedbackSubmit} className="feedback-form">
            <textarea
              placeholder="Lorem ipsum"
              rows="3"
              className="feedback-input"
            ></textarea>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <RiStarFill key={index} className="star-icon" />
              ))}
            </div>
            <button type="submit" className="submit-feedback-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 