import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import './Admin.css';

const AdminSettings = () => {
  const [expandedSections, setExpandedSections] = useState({
    general: true,
    connectTo: true,
    email: true,
    authorization: true,
    notification: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="admin-settings-container">
      <h2>Setting</h2>

      {/* General Section */}
      <div className="admin-settings-section">
        <div 
          className="admin-settings-header"
          onClick={() => toggleSection('general')}
        >
          General <RiArrowDownSLine />
        </div>
        {expandedSections.general && (
          <div className="admin-settings-content">
            <div className="admin-settings-item">
              <span>Language</span>
              <div className="admin-language-toggle">
                <button className="active">BM</button>
                <button>BI</button>
              </div>
            </div>
            <div className="admin-settings-item">
              <span>Data Backup</span>
              <input type="checkbox" checked readOnly />
            </div>
          </div>
        )}
      </div>

      {/* Connect To Section */}
      <div className="admin-settings-section">
        <div 
          className="admin-settings-header"
          onClick={() => toggleSection('connectTo')}
        >
          Connect To <RiArrowDownSLine />
        </div>
        {expandedSections.connectTo && (
          <div className="admin-settings-content">
            <div className="admin-settings-item">
              <span>GoDash</span>
              <input type="checkbox" checked readOnly />
            </div>
            <div className="admin-settings-item">
              <span>SuperController</span>
              <input type="checkbox" checked readOnly />
            </div>
          </div>
        )}
      </div>

      {/* Email Section */}
      <div className="admin-settings-section">
        <div 
          className="admin-settings-header"
          onClick={() => toggleSection('email')}
        >
          Email <RiArrowDownSLine />
        </div>
        {expandedSections.email && (
          <div className="admin-settings-content">
            <div className="admin-settings-item">
              <span>Enable SMTP</span>
              <input type="checkbox" checked readOnly />
            </div>
          </div>
        )}
      </div>

      {/* Authorization Section */}
      <div className="admin-settings-section">
        <div 
          className="admin-settings-header"
          onClick={() => toggleSection('authorization')}
        >
          Authorization <RiArrowDownSLine />
        </div>
        {expandedSections.authorization && (
          <div className="admin-settings-content">
            <div className="admin-settings-item">
              <span>Edit authorization</span>
              <input type="checkbox" checked readOnly />
            </div>
            <div className="admin-settings-item">
              <span>Authority Level</span>
              <select>
                <option value="">Select Level</option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Notification Section */}
      <div className="admin-settings-section">
        <div 
          className="admin-settings-header"
          onClick={() => toggleSection('notification')}
        >
          Notification <RiArrowDownSLine />
        </div>
        {expandedSections.notification && (
          <div className="admin-settings-content">
            <div className="admin-settings-item">
              <span>Enable Notification</span>
              <input type="checkbox" checked readOnly />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSettings; 