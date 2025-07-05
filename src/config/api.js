const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' 
    ? 'http://localhost:5000'
    : 'https://help-desk-assign-project-daja.vercel.app');

// Remove trailing slash if present
const normalizedBaseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;

export const API_URLS = {
  login: `${normalizedBaseUrl}/api/auth/login`,
  register: `${normalizedBaseUrl}/api/auth/signup`, // Changed from register to signup to match backend
  // Add other API endpoints here
};

export default API_URLS; 