import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(() => ({
  text: {
    padding: '16px 24px',
  },
  noPadding: {
    padding: 0,
  },
}))

function DialogTitleText({ className, noPadding, value, ...props }) {
  const classes = useStyles()
  const classNames = clsx(className, classes.text, {
    [classes.noPadding]: noPadding,
  })

  return (
    <Typography className={classNames} component="div" variant="h2" {...props}>
      {value}
    </Typography>
  )
}

DialogTitleText.propTypes = {
  className: PropTypes.string,
  noPadding: PropTypes.bool,
  value: PropTypes.node,
}

export default DialogTitleText
