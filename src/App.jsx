import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import RoleSelection from './components/RoleSelection';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Dashboard from './components/dashboard/Dashboard';
import OperationDashboard from './components/dashboard/OperationDashboard';
import UserProfile from './components/dashboard/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import Performance from './components/dashboard/Performance';

// User components
import UserNewTicket from './components/dashboard/user/UserNewTicket';
import UserMyTickets from './components/dashboard/user/UserMyTickets';
import './components/dashboard/user/User.css';

// Operation team components
import TicketApproval from './components/dashboard/operation/TicketApproval';
import OperationMyTickets from './components/dashboard/operation/OperationMyTickets';

// Technical support components
import TechnicalDashboard from './components/dashboard/technical/TechnicalDashboard';
import TechnicalMyTickets from './components/dashboard/technical/TechnicalMyTickets';
import TechnicalPerformance from './components/dashboard/technical/TechnicalPerformance';

// Admin components
import AdminDashboard from './components/dashboard/admin/AdminDashboard';
import AdminDatabase from './components/dashboard/admin/AdminDatabase';
import AdminSettings from './components/dashboard/admin/AdminSettings';
import AdminUserLogHistory from './components/dashboard/admin/AdminUserLogHistory';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        
        {/* Redirect /dashboard to role-specific dashboard */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Navigate to={`/dashboard/${localStorage.getItem('userRole') || 'user'}`} replace />
            </ProtectedRoute>
          } 
        />

        {/* User Dashboard Routes */}
        <Route 
          path="/dashboard/user" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="new-ticket" element={<UserNewTicket />} />
          <Route path="my-tickets" element={<UserMyTickets />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Operation Team Dashboard Routes */}
        <Route 
          path="/dashboard/operation" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<OperationDashboard />} />
          <Route path="ticket-approval" element={<TicketApproval />} />
          <Route path="my-tickets" element={<OperationMyTickets />} />
          <Route path="performance" element={<Performance />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Technical Support Dashboard Routes */}
        <Route 
          path="/dashboard/technical" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<TechnicalDashboard />} />
          <Route path="my-tickets" element={<TechnicalMyTickets />} />
          <Route path="performance" element={<TechnicalPerformance />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route 
          path="/dashboard/admin" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="database" element={<AdminDatabase />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="user-log-history" element={<AdminUserLogHistory />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
