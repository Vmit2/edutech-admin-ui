import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(() => ({
  row: {
    margin: '0 -12px',
  },
}))

function FormSectionRow({ children, ...props }) {
  const classes = useStyles()

  return (
    <Grid container className={classes.row} spacing={3} {...props}>
      {children}
    </Grid>
  )
}

FormSectionRow.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FormSectionRow
