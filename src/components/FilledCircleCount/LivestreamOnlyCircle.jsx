import { t } from '@lingui/macro'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import VideoIcon from 'src/components/Icons/VideoIcon'
import FilledCircleCount from './FilledCircleCount'

const useStyles = makeStyles(() => ({
  circle: {
    width: 30,
    transform: 'scale(0.7)',
  },
  icon: {
    fontSize: 18,
  },
}))

function LivestreamOnlyCircle({ noLabel }) {
  const classes = useStyles()

  return (
    <FilledCircleCount
      circleClassName={classes.circle}
      label={noLabel ? undefined : t`Livestream Only`}
      size="medium"
      value={<VideoIcon className={classes.icon} fontSize="small" />}
      variant="yellow"
    />
  )
}

LivestreamOnlyCircle.propTypes = {
  noLabel: PropTypes.bool,
}

LivestreamOnlyCircle.defaultProps = {
  noLabel: false,
}

export default LivestreamOnlyCircle
