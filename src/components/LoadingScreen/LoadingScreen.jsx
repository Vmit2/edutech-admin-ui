import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: theme.spacing(3),
  },
}))

function LoadingScreen() {
  const classes = useStyles()

  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [])

  return (
    <div className={classes.root}>
      <Box maxWidth={400} width="90%">
        <LinearProgress />
      </Box>
    </div>
  )
}

export default LoadingScreen
