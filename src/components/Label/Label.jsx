import { fade, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'default',
    minWidth: 20,
    padding: theme.spacing(0.5, 1),
    borderRadius: 4,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  primary: {
    color: theme.palette.primary.main,
    backgroundColor: fade(theme.palette.primary.main, 0.08),
  },
  secondary: {
    color: theme.palette.secondary.main,
    backgroundColor: fade(theme.palette.secondary.main, 0.08),
  },
  success: {
    color: theme.palette.success.main,
    backgroundColor: fade(theme.palette.success.main, 0.08),
  },
  warning: {
    color: theme.palette.warning.main,
    backgroundColor: fade(theme.palette.warning.main, 0.08),
  },
  error: {
    color: theme.palette.error.main,
    backgroundColor: fade(theme.palette.error.main, 0.08),
  },
}))

function Label({ className, color, children }) {
  const classes = useStyles()

  return (
    <span
      className={clsx(
        classes.root,
        {
          [classes[color]]: color,
        },
        className,
      )}
    >
      {children}
    </span>
  )
}

Label.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
  ]),
  children: PropTypes.node.isRequired,
}

Label.defaultProps = {
  className: '',
  color: 'secondary',
}

export default Label
