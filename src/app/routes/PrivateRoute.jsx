import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../redux-store/authenticationSlice';
import { URL_LOGIN } from '../constants/urls/urlFrontEnd';

export const PrivateRoute = ({ children, roles }) => {
  const isAuthenticated = useSelector(selectIsLogged);

  if (!isAuthenticated) {
    return <Navigate to={URL_LOGIN} />;
  }

  if (roles && roles.length > 0) {
    // Vérifiez les rôles ici si nécessaire.
  }

  return children;
};
