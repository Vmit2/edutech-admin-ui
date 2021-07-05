import { CssBaseline } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppErrorBoundary from "./AppErrorBoundary";
import AppRoutes from "./AppRoutes";
// import ScrollReset from "./components/ScrollReset";
import { createTheme } from "./config/theme";
// import { useSettings } from "./context/SettingsContext";
import AppInitializer from "./AppInitializer";

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
  // const { settings } = useSettings();
  return (
    <ThemeProvider theme={createTheme({})}>
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
    </ThemeProvider>
  );
}

App.propTypes = {
  router: PropTypes.elementType,
};

export default App;
