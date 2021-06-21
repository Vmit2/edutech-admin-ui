import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    marginRight: 8,
    '&:last-child': {
      marginRight: 0,
    },
  },
}))

function FilterBar({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {React.Children.map(children, (child) => (
        <div className={classes.item}>{child}</div>
      ))}
    </div>
  )
}

FilterBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FilterBar
