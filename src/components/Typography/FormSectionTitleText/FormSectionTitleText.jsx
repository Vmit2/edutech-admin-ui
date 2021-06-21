import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

function FormSectionTitleText({ value, ...props }) {
  return (
    <Typography variant="h2" {...props}>
      {value}
    </Typography>
  )
}

FormSectionTitleText.propTypes = {
  value: PropTypes.node,
}

export default FormSectionTitleText
