import { createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  let token = useSelector((state) => state.auth.token) || localStorage.getItem('token');
  const location = useLocation();
  const navigate = useNavigate();  
  useEffect(() => {
    if (!['/login', '/signup'].includes(location.pathname) && !token) {
      navigate('/login');
    }
    if (token) {
      navigate('/jobs')
    }
  }, [location.pathname, navigate, token]);

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};