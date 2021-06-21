import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import './config/fonts.css'
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
import store from "./redux/store";
// core components

// const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    {/* <SettingsProvider settings={settings}> */}
      <App />
      {/* <ReactQueryDevtools /> */}
    {/* </SettingsProvider> */}
  </Provider>,
  document.getElementById("root")
);
  
