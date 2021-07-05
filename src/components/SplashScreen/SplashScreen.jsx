import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import eduTechLogo from '../../assets/images/eduTechLogo.ico';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(3),
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
    top: 0,
    left: 0,
    zIndex: 2000,
  },
  logo: {
    width: 200,
    maxWidth: '100%',
  },
}))

function SlashScreen() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center" mb={6}>
        <img className={classes.logo} src={eduTechLogo}/>
      </Box>

      <CircularProgress />
    </div>
  )
}

export default SlashScreen
