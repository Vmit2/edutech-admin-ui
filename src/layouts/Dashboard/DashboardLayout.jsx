import { makeStyles } from "@material-ui/core/styles";
import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import AppErrorBoundary from "../../AppErrorBoundary";
import { LoadingScreen } from "../../components/LoadingScreen";
import { APP_BAR_HEIGHT_DESKTOP } from "../../config/constants";
import SideNavBar from "./SideNavBar/index";
import TopAppBar from "./TopAppBar/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: APP_BAR_HEIGHT_DESKTOP,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

function DashboardLayout({ children }) {
  const classes = useStyles();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  return (
    <div className={classes.root}>
      <TopAppBar openMobileDrawer={() => setIsMobileDrawerOpen(true)} />
      <SideNavBar
        closeMobileDrawer={() => setIsMobileDrawerOpen(false)}
        isMobileDrawerOpen={isMobileDrawerOpen}
      />

      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <AppErrorBoundary>
              <Suspense fallback={<LoadingScreen />}>
                <Outlet />
              </Suspense>
            </AppErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
