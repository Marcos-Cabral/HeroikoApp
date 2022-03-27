import React from 'react'
import { PropTypes } from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component
}) => {
    const location = useLocation();

    localStorage.setItem('lastPath', location.pathname);
    return isAuthenticated ?
        <Component />
        : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}