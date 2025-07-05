const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' 
    ? 'http://localhost:5000'
    : 'https://help-desk-assign-project-daja.vercel.app');

export const API_URLS = {
  login: `${API_BASE_URL}/api/auth/login`,
  register: `${API_BASE_URL}/api/auth/register`,
  // Add other API endpoints here
};

export default API_URLS; 