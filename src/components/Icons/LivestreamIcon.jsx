import PropTypes from 'prop-types'
import React from 'react'
import VideoIcon from 'src/components/Icons/VideoIcon'

function LivestreamIcon({ htmlColor, ...props }) {
  return <VideoIcon filled htmlColor={htmlColor} {...props} />
}

LivestreamIcon.propTypes = {
  htmlColor: PropTypes.string,
}

LivestreamIcon.defaultProps = {
  htmlColor: '#0091FF',
}

export default LivestreamIcon
