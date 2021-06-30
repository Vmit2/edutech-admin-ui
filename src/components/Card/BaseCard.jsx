import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  card: {
    border: `1px solid ${theme.palette.module.border}`,
    borderRadius: 16,
  },
  clickable: {
    cursor: 'pointer',
  },
  hoverable: {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
}))

function BaseCard({ hoverable, children, onClick, ...props }) {
  const classes = useStyles()

  const clickable = !!onClick
  const cardClassNames = clsx(classes.card, {
    [classes.clickable]: clickable,
    [classes.hoverable]: hoverable || clickable,
  })

  const divProps = { ...props }

  if (onClick) {
    divProps.role = 'button'
    divProps.tabIndex = '0'
  }

  const handleKeyDown = (event) => {
    if (!onClick) {
      return
    }

    if (event.key === 'Enter') {
      onClick(event)
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={cardClassNames}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...divProps}
    >
      {children}
    </div>
  )
}

BaseCard.propTypes = {
  hoverable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

BaseCard.defaultProps = {
  hoverable: false,
}

export default BaseCard
