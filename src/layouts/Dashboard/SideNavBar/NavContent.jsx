import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import eduTechLogo from '../../../assets/images/eduTechLogo.ico';
import NavItemTree from './NavItemTree';

function NavContent() {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Hidden lgUp>
        <Box display="flex" justifyContent="center" p={2}>
          <RouterLink to="/">
           <img alt="appLogo" src={eduTechLogo} width="50" height="50"/>
          </RouterLink>
        </Box>
      </Hidden>

      <Box p={2}>
        <NavItemTree />
      </Box>
    </Box>
  )
}

export default NavContent
