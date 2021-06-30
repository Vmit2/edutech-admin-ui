import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import React from 'react'

const alignments = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
}

function LoadingProgress({ align, color, ...props }) {
  return (
    <Box display="flex" justifyContent={alignments[align]} {...props}>
      <CircularProgress color={color} size="2rem" />
    </Box>
  )
}

LoadingProgress.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'center']),
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
}

LoadingProgress.defaultProps = {
  align: 'center',
  color: 'primary',
}

export default LoadingProgress
