import Alert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'
import React from 'react'

function WarningAlert({ children }) {
  return <Alert severity="warning">{children}</Alert>
}

WarningAlert.propTypes = {
  children: PropTypes.node,
}

export default WarningAlert
