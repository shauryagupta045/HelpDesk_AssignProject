import { useState } from 'react';
import { RiSearch2Line, RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri';
import './Admin.css';

const AdminDatabase = () => {
  const [activeTab, setActiveTab] = useState('User');
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const users = [
    {
      staffId: 'ABC123',
      name: 'Abu',
      department: 'IT',
      speciality: 'Software'
    },
    {
      staffId: 'ABC124',
      name: 'Ahmad',
      department: 'Software',
      speciality: 'Networking'
    },
    {
      staffId: 'ABC125',
      name: 'Ali',
      department: 'Technical',
      speciality: 'Hardware'
    }
  ];

  return (
    <div className="admin-database-container">
      <h2>Database</h2>

      {/* Tabs */}
      <div className="admin-database-tabs">
        <button 
          className={`admin-tab ${activeTab === 'User' ? 'active' : ''}`}
          onClick={() => setActiveTab('User')}
        >
          User
        </button>
        <button 
          className={`admin-tab ${activeTab === 'Operation Team' ? 'active' : ''}`}
          onClick={() => setActiveTab('Operation Team')}
        >
          Operation Team
        </button>
        <button 
          className={`admin-tab ${activeTab === 'Technical Support' ? 'active' : ''}`}
          onClick={() => setActiveTab('Technical Support')}
        >
          Technical Support
        </button>
      </div>

      {/* Controls */}
      <div className="admin-table-controls">
        <div className="admin-search-box">
          <input 
            type="text" 
            placeholder="Find ticket" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearch2Line className="admin-search-icon" />
        </div>
        
        <div className="admin-entries-control">
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

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Staff ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Speciality</th>
              <th>Setting</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.staffId}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{user.staffId}</td>
                <td>{user.name}</td>
                <td>{user.department}</td>
                <td>{user.speciality}</td>
                <td>
                  <div className="admin-table-actions">
                    <button className="admin-edit-btn">
                      <RiPencilLine />
                    </button>
                    <button className="admin-delete-btn">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-table-footer">
        <div className="admin-showing-entries">
          Showing 1 to 3 of 3 entries
        </div>
        <div className="admin-pagination">
          <button disabled>«</button>
          <button className="active">1</button>
          <button disabled>»</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDatabase; 