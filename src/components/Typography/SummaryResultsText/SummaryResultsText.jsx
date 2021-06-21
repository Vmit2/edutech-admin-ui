import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  text: {
    ...theme.typography.body1,
    fontSize: 18,
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

function SummaryResultsText({
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
    <div className={classNames} {...props}>
      {value}
    </div>
  )
}

SummaryResultsText.propTypes = {
  className: PropTypes.string,
  noMarginTop: PropTypes.bool,
  noMarginBottom: PropTypes.bool,
  value: PropTypes.node,
}

export default SummaryResultsText
