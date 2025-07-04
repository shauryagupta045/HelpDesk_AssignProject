import { useState } from 'react';
import './Admin.css';

const AdminUserLogHistory = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const logs = [
    {
      no: 1,
      dateSignIn: '130821 / 0800',
      staffId: 'XL000001',
      department: 'OT',
      activity: 'Create Team',
      dateSignOut: '130821 / 0815'
    },
    {
      no: 2,
      dateSignIn: '130821 / 0805',
      staffId: '',
      department: '',
      activity: '',
      dateSignOut: '130821 / 0810'
    },
    {
      no: 3,
      dateSignIn: '',
      staffId: '',
      department: '',
      activity: '',
      dateSignOut: ''
    },
    {
      no: 4,
      dateSignIn: '',
      staffId: '',
      department: '',
      activity: '',
      dateSignOut: ''
    },
    {
      no: 5,
      dateSignIn: '',
      staffId: '',
      department: '',
      activity: '',
      dateSignOut: ''
    }
  ];

  return (
    <div className="admin-log-history-container">
      <h2>User Log History</h2>

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

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Date/Sign In Time</th>
              <th>Staff ID</th>
              <th>Department</th>
              <th>Activity</th>
              <th>Date/Sign Out time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.no}>
                <td>{log.no}.</td>
                <td>{log.dateSignIn}</td>
                <td>{log.staffId}</td>
                <td>{log.department}</td>
                <td>{log.activity}</td>
                <td>{log.dateSignOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-table-footer">
        <div className="admin-showing-entries">
          Showing 1 to 5 of 5 entries
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

export default AdminUserLogHistory; 