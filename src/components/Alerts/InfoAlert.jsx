import Alert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'
import React from 'react'

function InfoAlert({ children }) {
  return <Alert severity="info">{children}</Alert>
}

InfoAlert.propTypes = {
  children: PropTypes.node,
}

export default InfoAlert
