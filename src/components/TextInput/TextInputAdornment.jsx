import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  iconRoot: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.label,
    whiteSpace: 'nowrap',
  },
  error: {
    color: theme.palette.error.main,
  },
}))

function TextInputAdornment({ icon, error, children }) {
  const classes = useStyles()
  const iconClasses = clsx(classes.iconRoot, {
    [classes.error]: error,
  })

  if (!icon && !children) {
    return null
  }

  if (icon && !children) {
    return <div className={iconClasses}>{icon}</div>
  }

  if (!icon && children) {
    return children
  }

  return (
    <>
      <div className={classes.iconRoot}>{icon}</div>

      {children}
    </>
  )
}

TextInputAdornment.propTypes = {
  error: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.node,
}

TextInputAdornment.defaultProps = {
  error: false,
}

export default TextInputAdornment
