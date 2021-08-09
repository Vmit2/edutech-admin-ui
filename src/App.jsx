import { CssBaseline } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppErrorBoundary from "./AppErrorBoundary";
import AppInitializer from "./AppInitializer";
import AppRoutes from "./AppRoutes";
import { createTheme } from "./config/theme";

const useStyles = makeStyles(() => ({
  "@global": {
    html: {
      height: "100%",
      width: "100%",
      overflowX: "hidden",
    },
    body: {
      height: "100%",
      width: "100%",
      padding: 0,
      margin: 0,
    },
    "#root": {
      height: "100%",
      width: "100%",
    },
  },
}));

function App() {
  useStyles();
  return (
    <ThemeProvider theme={createTheme({})}>
      <SnackbarProvider maxSnack={1}>
        <CssBaseline />
        <AppErrorBoundary>
          <BrowserRouter>
            <AppInitializer>
              {/* <ScrollReset /> */}
              {/* <CookiesNotification /> */}
              <AppRoutes />
            </AppInitializer>
          </BrowserRouter>
        </AppErrorBoundary>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

App.propTypes = {
  router: PropTypes.elementType,
};

export default App;
