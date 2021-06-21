import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

function FilterMenuTitleText({ value, ...props }) {
  return (
    <Typography component="div" variant="h4" {...props}>
      {value}
    </Typography>
  )
}

FilterMenuTitleText.propTypes = {
  value: PropTypes.string.isRequired,
}

export default FilterMenuTitleText
