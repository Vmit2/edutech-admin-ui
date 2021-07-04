import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    color: theme.palette.text.secondary,
  },
}))

function TooltipIcon({ className, icon, title }) {
  const classes = useStyles()
  const classNames = clsx(classes.root, className)

  return (
    <Tooltip title={title}>
      <div className={classNames}>{icon}</div>
    </Tooltip>
  )
}

TooltipIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
}

export default TooltipIcon
