import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { isEmpty } from '../../utils/isEmpty';

const BADGE_RADIUS = 10

const useStyles = makeStyles((theme) => ({
  circle: {
    padding: '0 8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.typography.body1,
    fontWeight: 500,
    lineHeight: 'normal',
  },
  labelRoot: {
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: 16,
  },
  label: {
    marginLeft: 8,
    ...theme.typography.body1,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  blue: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
  },
  blueLight: {
    backgroundColor: theme.palette.common.blueLight,
    color: theme.palette.common.white,
  },
  green: {
    backgroundColor: theme.palette.common.green,
    color: theme.palette.common.white,
  },
  orange: {
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.white,
  },
  yellow: {
    backgroundColor: theme.palette.common.yellow,
    color: theme.palette.common.white,
  },
  pink: {
    backgroundColor: theme.palette.common.pink,
    color: theme.palette.common.white,
  },
  gray: {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.common.white,
  },
  grayLight: {
    backgroundColor: theme.palette.module.border,
    color: theme.palette.text.secondary,
  },
  white: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.secondary,
  },
  red: {
    backgroundColor: theme.palette.common.red,
    color: theme.palette.text.secondary,
  },
  small: {
    height: 2 * BADGE_RADIUS,
    minWidth: 2 * BADGE_RADIUS,
    borderRadius: BADGE_RADIUS,
    fontSize: 12,
  },
  medium: {
    height: 3 * BADGE_RADIUS,
    minWidth: 3 * BADGE_RADIUS,
    borderRadius: (3 * BADGE_RADIUS) / 2,
    fontSize: 14,
  },
}))

function FilledCircleCount({
  circleClassName,
  label,
  labelRootClassName,
  size,
  value,
  variant,
  onClick,
}) {
  const classes = useStyles()
  const circleClassNames = clsx(
    classes.circle,
    classes[variant],
    classes[size],
    circleClassName,
  )
  const labelRootClassNames = clsx(classes.labelRoot, labelRootClassName)

  const circleProps = { className: circleClassNames }

  if (onClick) {
    circleProps.role = 'button'
    circleProps.onClick = onClick
  }

  const circle = <div {...circleProps}>{isEmpty(value) ? '' : value}</div>

  return label ? (
    <div className={labelRootClassNames}>
      {circle}

      <span className={classes.label}>{label}</span>
    </div>
  ) : (
    circle
  )
}

FilledCircleCount.propTypes = {
  circleClassName: PropTypes.string,
  label: PropTypes.string,
  labelRootClassName: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  value: PropTypes.node,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'blue',
    'blueLight',
    'green',
    'orange',
    'yellow',
    'pink',
    'gray',
    'grayLight',
    'white',
    'red',
  ]),
  onClick: PropTypes.func,
}

FilledCircleCount.defaultProps = {
  size: 'medium',
  variant: 'primary',
}

export default FilledCircleCount
