import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { createElement } from 'react'

const useStyles = makeStyles((theme) => ({
  text: {
    cursor: 'pointer',
    ...theme.typography.body1,
    color: theme.palette.common.yellow,
    fontWeight: 700,
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
}))

function TertiaryLinkText({ className, component, value, ...props }) {
  const classes = useStyles()
  const elProps = {
    className: clsx(classes.text, className),
    ...props,
  }

  return createElement(component, elProps, value)
}

TertiaryLinkText.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOf(['span', 'div']),
  value: PropTypes.string,
}

TertiaryLinkText.defaultProps = {
  component: 'span',
}

export default TertiaryLinkText
