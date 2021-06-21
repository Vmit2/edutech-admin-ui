import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 7,
  },
  text: {
    margin: '0 4px',
    color: theme.palette.text.secondary,
    fontSize: 14,
    fontWeight: 600,
  },
}))

function TextInputHint({ value }) {
  const classes = useStyles()
  const theme = useTheme()

  if (!value) {
    return null
  }

  return (
    <div className={classes.row}>
      <WbIncandescentIcon fontSize="small" htmlColor={theme.palette.common.yellow} />
      <p className={classes.text}>{value}</p>
    </div>
  )
}

TextInputHint.propTypes = {
  value: PropTypes.string,
}

export default TextInputHint
