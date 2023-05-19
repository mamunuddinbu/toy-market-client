import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log('user in private route', user);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace state={{ from: location.pathname }} />;
};

export default PrivateRoute;
