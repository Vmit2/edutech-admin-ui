import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

function CardTitleText({ value, ...props }) {
  return (
    <Typography component="div" variant="h4" {...props}>
      {value}
    </Typography>
  )
}

CardTitleText.propTypes = {
  value: PropTypes.string.isRequired,
}

export default CardTitleText
