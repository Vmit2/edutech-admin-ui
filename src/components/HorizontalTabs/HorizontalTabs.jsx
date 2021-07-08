import { makeStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  indicator: {
    height: '2px',
    // borderRadius: 3,
    backgroundColor: theme.palette.primary.main,
  },
  label: {
    minWidth: 'auto',
    maxWidth: 'inherit',
    padding: '0 30px',
    color: theme.palette.text.secondary,
    fontSize: 16,
    fontWeight: 600,
    textTransform: 'capitalize',
    opacity: 1,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  selectedLabel: {
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  borderBottom: {
    borderBottom: `1px solid ${theme.palette.module.border}`,
    // marginTop: '-1px',
  },
}))

function HorizontalTabs({ items, value, onChange }) {
  const classes = useStyles()

  return (
    <Tabs
      classes={{
        scroller: classes.borderBottom,
        indicator: classes.indicator,
      }}
      scrollButtons="auto"
      value={value}
      variant="scrollable"
      onChange={onChange}
    >
      {items.map((item) => (
        <Tab
          classes={{
            selected: classes.selectedLabel,
            root: classes.label,
          }}
          key={item.value}
          label={item.label}
          tabIndex="0"
          value={item.value}
        />
      ))}
    </Tabs>
  )
}

HorizontalTabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default HorizontalTabs
