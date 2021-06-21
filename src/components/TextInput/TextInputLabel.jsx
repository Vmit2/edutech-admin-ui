import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 14,
  },
  label: {
    color: theme.palette.text.label,
    fontSize: 16,
    fontWeight: 600,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
}))

function TextInputLabel({ disabled, noMarginBottom, htmlFor, value }) {
  const classes = useStyles()
  const classNames = clsx(classes.root, {
    [classes.disabled]: disabled,
    [classes.noMarginBottom]: noMarginBottom,
  })

  return (
    <div className={classNames}>
      {htmlFor ? (
        <label className={classes.label} htmlFor={htmlFor}>
          {value}
        </label>
      ) : (
        <span className={classes.label}>{value}</span>
      )}
    </div>
  )
}

TextInputLabel.propTypes = {
  disabled: PropTypes.bool,
  noMarginBottom: PropTypes.bool,
  htmlFor: PropTypes.string,
  value: PropTypes.string,
}

TextInputLabel.defaultProps = {
  disabled: false,
  noMarginBottom: false,
}

export default TextInputLabel
