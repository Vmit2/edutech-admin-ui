import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { cloneElement } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: (props) => {
      if (props.align === 'left') {
        return 'flex-start'
      }

      if (props.align === 'center') {
        return 'center'
      }

      return 'flex-end'
    },
    marginTop: 30,
    [theme.breakpoints.down('xs')]: {
      flexDirection: (props) =>
        props.stackOnMobile ? 'column-reverse' : 'row',
    },
  },
  item: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  stack: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      // Opposite logic because of column-reverse
      '&:first-child': {
        marginBottom: 0,
      },
      '&:last-child': {
        marginTop: 0,
      },
    },
  },
}))

function FormActions({ noDivider, stackOnMobile, align, children }) {
  const classes = useStyles({ stackOnMobile, align })
  const showDivider = !noDivider

  const itemClassNames = clsx(classes.item, {
    [classes.stack]: stackOnMobile,
  })

  return (
    <div className={classes.root}>
      {showDivider && <Divider />}

      <div className={classes.actions}>
        {React.Children.map(children, (child) =>
          child ? cloneElement(child, { className: itemClassNames }) : null,
        )}
      </div>
    </div>
  )
}

FormActions.propTypes = {
  noDivider: PropTypes.bool,
  stackOnMobile: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
}

FormActions.defaultProps = {
  noDivider: false,
  stackOnMobile: false,
  align: 'left',
}

export default FormActions
