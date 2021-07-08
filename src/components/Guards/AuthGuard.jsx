import PropTypes from 'prop-types';
import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuthState } from '../../hooks/redux';

function AuthGuard({ children }) {
  const auth = useAuthState();

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" />
  }

  return children;
}

AuthGuard.propTypes = {
  children: PropTypes.any,
}

export default AuthGuard;
