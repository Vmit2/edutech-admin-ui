import SvgIcon from '@material-ui/core/SvgIcon'
import PropTypes from 'prop-types'
import React from 'react'

function InPersonIcon({ htmlColor, ...props }) {
  return (
    <SvgIcon htmlColor={htmlColor} viewBox="0 0 48 48" {...props}>
      <path d="M0 0h48v48H0z" fill="none" />
      <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </SvgIcon>
  )
}

InPersonIcon.propTypes = {
  htmlColor: PropTypes.string,
}

InPersonIcon.defaultProps = {
  htmlColor: '#6236FF',
}

export default InPersonIcon
