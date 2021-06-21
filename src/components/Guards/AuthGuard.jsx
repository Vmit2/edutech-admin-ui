import PropTypes from 'prop-types'
import React from 'react'
import {  Redirect } from 'react-router-dom'
import { useAuthState } from '../../hooks/redux'

function AuthGuard({ children }) {
  const auth = useAuthState()

  if (!auth.isLoggedIn) {
    return <Redirect to="/login" />
  }

  return children
}

AuthGuard.propTypes = {
  children: PropTypes.any,
}

export default AuthGuard
