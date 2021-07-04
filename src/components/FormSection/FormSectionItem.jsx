import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'

function FormSectionItem({ xs, sm, md, lg, xl, children }) {
  return (
    <Grid item lg={lg} md={md} sm={sm} xl={xl} xs={xs}>
      {children}
    </Grid>
  )
}

FormSectionItem.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  children: PropTypes.node.isRequired,
}

FormSectionItem.defaultProps = {
  xs: 12,
  sm: 12,
  md: 10,
  lg: 8,
  xl: 7,
}

export default FormSectionItem
