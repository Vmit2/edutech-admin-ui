import Alert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'
import React from 'react'

function ErrorAlert({ children }) {
  return <Alert severity="error">{children}</Alert>
}

ErrorAlert.propTypes = {
  children: PropTypes.node,
}

export default ErrorAlert
