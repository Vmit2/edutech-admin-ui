import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
  text: {
    marginTop: 30,
    marginBottom: 30,
  },
  noMarginTop: {
    marginTop: 0,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
}))

function PageTitleText({
  className,
  noMarginTop,
  noMarginBottom,
  value,
  ...props
}) {
  const classes = useStyles()
  const classNames = clsx(classes.text, className, {
    [classes.noMarginTop]: noMarginTop,
    [classes.noMarginBottom]: noMarginBottom,
  })

  return (
    <Typography className={classNames} variant="h3" {...props}>
      {value}
    </Typography>
  )
}

PageTitleText.propTypes = {
  className: PropTypes.string,
  noMarginTop: PropTypes.bool,
  noMarginBottom: PropTypes.bool,
  value: PropTypes.string.isRequired,
}

export default PageTitleText
