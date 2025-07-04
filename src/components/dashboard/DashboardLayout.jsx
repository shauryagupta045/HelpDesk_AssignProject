import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiDashboardLine, RiTicketLine, RiUserLine, RiLogoutBoxLine, RiNotification3Line, RiMessage2Line, RiBarChartBoxLine, RiDatabase2Line, RiSettings3Line, RiHistoryLine } from 'react-icons/ri';
import './admin/Admin.css';

const DashboardLayout = () => {
  const location = useLocation();
  const role = location.pathname.split('/')[2]; // Extracts role from URL: /dashboard/{role}/...
  const isAdmin = role === 'admin';

  return (
    <div className={isAdmin ? "admin-layout" : "dashboard-layout"}>
      {/* Sidebar */}
      <div className={isAdmin ? "admin-sidebar" : "dashboard-sidebar"}>
        <div className={isAdmin ? "admin-sidebar-header" : "sidebar-header"}>
          <h1>Helpdesk</h1>
        </div>
        <nav className={isAdmin ? "admin-sidebar-nav" : "sidebar-nav"}>
          <Link to={`/dashboard/${role}`} className={isAdmin ? "admin-nav-item" : "nav-item"}>
            <RiDashboardLine /> Dashboard
          </Link>
          {role === 'operation' ? (
            <Link to={`/dashboard/${role}/ticket-approval`} className="nav-item">
              <RiTicketLine /> Ticket Approval
            </Link>
          ) : role !== 'technical' && !isAdmin ? (
            <Link to={`/dashboard/${role}/new-ticket`} className="nav-item">
              <RiTicketLine /> New Ticket
            </Link>
          ) : null}
          {!isAdmin && (
            <Link to={`/dashboard/${role}/my-tickets`} className="nav-item">
              <RiTicketLine /> My Tickets
            </Link>
          )}
          {(role === 'operation' || role === 'technical') && (
            <Link to={`/dashboard/${role}/performance`} className="nav-item">
              <RiBarChartBoxLine /> Performance
            </Link>
          )}
          {isAdmin && (
            <>
              <Link to={`/dashboard/${role}/database`} className="admin-nav-item">
                <RiDatabase2Line /> Database
              </Link>
              <Link to={`/dashboard/${role}/settings`} className="admin-nav-item">
                <RiSettings3Line /> Setting
              </Link>
              <Link to={`/dashboard/${role}/user-log-history`} className="admin-nav-item">
                <RiHistoryLine /> User Log History
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className={isAdmin ? "admin-main" : "dashboard-main"}>
        {/* Top Header */}
        <header className={isAdmin ? "admin-header" : "dashboard-header"}>
          <div className={isAdmin ? "admin-header-title" : "header-title"}>
            {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
          </div>
          <div className={isAdmin ? "admin-header-actions" : "header-actions"}>
            <button className={isAdmin ? "admin-header-icon" : "header-icon"}>
              <RiNotification3Line />
            </button>
            <button className={isAdmin ? "admin-header-icon" : "header-icon"}>
              <RiMessage2Line />
            </button>
            <Link to={`/dashboard/${role}/profile`} className={isAdmin ? "admin-header-icon" : "header-icon"}>
              <RiUserLine />
            </Link>
            <Link to="/login" className={isAdmin ? "admin-header-icon" : "header-icon"}>
              <RiLogoutBoxLine />
            </Link>
          </div>
        </header>

        {/* Content Area */}
        <main className={isAdmin ? "admin-content" : "dashboard-content"}>
          <Outlet />
        </main>

        {/* Footer */}
        <footer className={isAdmin ? "admin-footer" : "dashboard-footer"}>
          <p>© 2024 Helpdesk System</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout; 