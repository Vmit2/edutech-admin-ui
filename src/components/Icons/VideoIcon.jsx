import SvgIcon from '@material-ui/core/SvgIcon'
import PropTypes from 'prop-types'
import React from 'react'

// From feather icons:
// https://github.com/feathericons/feather/blob/master/icons/video.svg
function VideoIcon({ filled, ...props }) {
  return (
    <SvgIcon
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{ fill: filled ? 'currentColor' : 'none' }}
      viewBox="0 0 24 24"
      {...props}
    >
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect height="14" rx="2" ry="2" width="15" x="1" y="5" />
    </SvgIcon>
  )
}

VideoIcon.propTypes = {
  filled: PropTypes.bool,
}

VideoIcon.defaultProps = {
  filled: false,
}

export default VideoIcon
