import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import NotFoundSvg from '../../components/NotFoundSvg';
import DashboardPage from '../../layouts/Dashboard/DashboardPage';

const useStyles = makeStyles(() => ({
  image: {
    width: 560,
    maxWidth: '100%',
    height: 'auto',
    maxHeight: 300,
  },
}))

function NotFoundView() {
  const title = "Page Not Found"
  const classes = useStyles()

  const theme = useTheme()
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <DashboardPage hideBreadcrumbs documentTitle={title}>
      <Box mt={6}>
        <Typography
          align="center"
          color="textPrimary"
          variant={isMobileDevice ? 'h4' : 'h1'}
        >
          Page Not Found
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle2">
          Try using the left navigation menu or request access to this page.
        </Typography>
        <Box display="flex" justifyContent="center" mt={6}>
          <NotFoundSvg className={classes.image} />
        </Box>
        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            color="secondary"
            component={RouterLink}
            to="/"
            variant="outlined"
          >
            Back to home
          </Button>
        </Box>
      </Box>
    </DashboardPage>
  )
}

export default NotFoundView
