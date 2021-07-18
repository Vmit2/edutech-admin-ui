import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  APP_BAR_HEIGHT_DESKTOP,
  SIDE_DRAWER_WIDTH_DESKTOP,
  SIDE_DRAWER_WIDTH_MOBILE,
} from "../../../config/constants";
import NavContent from "./NavContent";
import Package from "../../../../package.json";
import Label from "../../../components/Label/Label";
const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: SIDE_DRAWER_WIDTH_MOBILE,
    backgroundColor: theme.palette.module.backgroundLight,
    // backgroundColor: theme.palette.primary.main,
  },
  desktopDrawer: {
    width: SIDE_DRAWER_WIDTH_DESKTOP,
    top: APP_BAR_HEIGHT_DESKTOP,
    height: `calc(100% - ${APP_BAR_HEIGHT_DESKTOP}px)`,
    backgroundColor: theme.palette.module.backgroundLight,
    // backgroundColor: theme.palette.primary.main,
    border: 0,
  },
  versionStyle: {
    textAlign: "center",
    marginLeft: "50%",
  },
}));

function SideNavBar({ isMobileDrawerOpen, closeMobileDrawer }) {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (isMobileDrawerOpen && closeMobileDrawer) {
      closeMobileDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = <NavContent />;

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          open={isMobileDrawerOpen}
          variant="temporary"
          onClose={closeMobileDrawer}
        >
          {content}
          <Label className="versionStyle" color="primary">
            Version:- {Package.version}
          </Label>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          open
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          variant="persistent"
        >
          {content}
          <Label className="versionStyle" color="primary">
            Version:- {Package.version}
          </Label>
        </Drawer>
      </Hidden>
    </>
  );
}

SideNavBar.propTypes = {
  isMobileDrawerOpen: PropTypes.bool,
  closeMobileDrawer: PropTypes.func,
};

export default SideNavBar;
