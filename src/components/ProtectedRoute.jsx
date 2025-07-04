import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const userRole = localStorage.getItem('userRole');
  const currentPath = location.pathname;

  // If no role is selected, redirect to role selection
  if (!userRole) {
    return <Navigate to="/role-selection" state={{ from: currentPath }} replace />;
  }

  // Extract role from URL path: /dashboard/{role}/...
  const urlRole = currentPath.split('/')[2];

  // If trying to access a different role's dashboard
  if (urlRole && urlRole !== userRole) {
    return <Navigate to={`/dashboard/${userRole}`} replace />;
  }

  return children;
};

export default ProtectedRoute; 