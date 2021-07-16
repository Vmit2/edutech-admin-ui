import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import eduTechLogo from "../../../assets/images/eduTechLogo.ico";
import {
  APP_BAR_HEIGHT_DESKTOP,
  APP_BAR_HEIGHT_MOBILE
} from "../../../config/constants";
import Account from "./Account";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: theme.palette.module.backgroundLight,
    boxShadow: "none",
  },
  toolbar: {
    minHeight: APP_BAR_HEIGHT_DESKTOP,
    padding: "5px 40px",
    border: `1px solid ${theme.palette.module.border}`,
    [theme.breakpoints.down("xs")]: {
      minHeight: APP_BAR_HEIGHT_MOBILE,
      padding: 15,
    },
    boxShadow : theme.palette.shadow.primary,
  },
  eduTechLogoStyle: {
    border: `outset 2px ${theme.palette.module.border}`,
    borderRadius:"50%",
    padding: "1px",
    width:"50px",
    height:"50px",
    boxShadow : theme.palette.shadow.primary,
  },
}));

function TopAppBar({ className, openMobileDrawer, ...props }) {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="transparent"
      {...props}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={openMobileDrawer}>
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden mdDown>
          <RouterLink to="/">
            <div className={classes.eduTechLogoStyle}>
              <img width={45} height={45} src={eduTechLogo} alt="appLogo" />
            </div>
          </RouterLink>
          {/* <PageTitleText value="Edutech" /> */}
        </Hidden>

        <Box flexGrow={1} ml={2} />

        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopAppBar.propTypes = {
  className: PropTypes.string,
  openMobileDrawer: PropTypes.func,
};

export default TopAppBar;
