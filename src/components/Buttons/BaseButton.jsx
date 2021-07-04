/* eslint-disable react/button-has-type,react/prop-types */
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React, { createElement, forwardRef } from 'react'

const Btn = forwardRef((props, ref) => {
  const {
    component,
    classes,
    className,
    disabled,
    endIcon,
    fullWidth,
    isLoading,
    size,
    startIcon,
    type,
    children,
    ...other
  } = props

  const isDisabled = disabled || isLoading

  const classNames = clsx(className, classes.root, {
    [classes.disabled]: isDisabled,
    [classes.xs]: size === 'extraSmall',
    [classes.small]: size === 'small',
    [classes.medium]: size === 'medium',
    [classes.full]: fullWidth,
  })

  const elProps =
    component === 'button'
      ? {
          className: classNames,
          disabled: isDisabled,
          ref,
          type,
          ...other,
        }
      : {
          className: classNames,
          ref,
          ...other,
        }

  return createElement(component, elProps, [
    startIcon && (
      <span className={classes.startIcon} key="startIcon">
        {startIcon}
      </span>
    ),
    isLoading ? (
      <CircularProgress color="inherit" key="progress" size={24} />
    ) : (
      children
    ),
    endIcon && (
      <span className={classes.endIcon} key="endIcon">
        {endIcon}
      </span>
    ),
  ])
})

Btn.defaultProps = {
  component: 'button',
  disabled: false,
  fullWidth: false,
  isLoading: false,
  size: 'medium',
  type: 'button',
}

const BaseButton = withStyles((theme) => ({
  root: {
    cursor: 'pointer',
    margin: 0,
    padding: '0 20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    borderRadius: 12,
    ...theme.typography.body1,
    fontWeight: 600,
    lineHeight: 'normal',
    '&:hover': {
      outline: 0,
    },
  },
  startIcon: {
    display: 'inherit',
    marginRight: 8,
  },
  endIcon: {
    display: 'inherit',
    marginLeft: 8,
  },
  disabled: {
    cursor: 'default',
    pointerEvents: 'none',
    opacity: 0.5,
  },
  xs: {
    height: 35,
    padding: '0 15px',
    fontSize: 14,
  },
  small: {
    height: 45,
  },
  medium: {
    height: 60,
  },
  full: {
    width: '100%',
  },
}))(Btn)

export default BaseButton
