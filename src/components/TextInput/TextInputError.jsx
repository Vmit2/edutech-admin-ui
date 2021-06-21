import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 7,
  },
  text: {
    margin: '0 4px',
    color: theme.palette.error.main,
    fontSize: 14,
    fontWeight: 600,
  },
}))

function TextInputError({ value }) {
  const classes = useStyles()
  const theme = useTheme()

  if (!value) {
    return null
  }

  return (
    <div className={classes.row}>
      <ReportProblemIcon fontSize="small" htmlColor={theme.palette.error.main} />
      <p className={classes.text}>{value}</p>
    </div>
  )
}

TextInputError.propTypes = {
  value: PropTypes.string,
}

export default TextInputError
