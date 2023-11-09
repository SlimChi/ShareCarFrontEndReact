import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { URL_HOME, URL_LOGIN } from '../constants/urls/urlFrontEnd';
import { selectHasRole, selectIsLogged } from '../redux-store/authenticationSlice';

export const PrivateRoute = ({ children, roles }) => {
    const location = useLocation();
    const isAuthenticated = useSelector(selectIsLogged);
    const hasRole = useSelector((state) => selectHasRole(state, roles));
  
    console.log("isAuthenticated:", isAuthenticated);
    console.log("hasRole:", hasRole);

    // Si l'utilisateur n'est pas connecté, mais la route est accessible par les non connectés
    if (!isAuthenticated && (!roles || !hasRole)) {
        return children;
    }

    if (!isAuthenticated) {
        return <Navigate replace to={URL_LOGIN} state={{ from: location }} />;
    }

    if (roles && !hasRole) {
        return <Navigate replace to={{ pathname: URL_HOME }} />;
    }

    return children;
};
