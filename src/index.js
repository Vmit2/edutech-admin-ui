import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./config/fonts.css";
import { ReactQueryDevtools } from "react-query-devtools";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
import { configureStore } from "./redux/store";
// import { QueryClient, QueryClientProvider } from "react-query";
// core components

const store = configureStore();
// const hist = createBrowserHistory();
// const queryClient = new QueryClient();
ReactDOM.render(
  <Provider store={store}>
    {/* <SettingsProvider settings={settings}> */}
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* </QueryClientProvider> */}
    <ReactQueryDevtools />
    {/* </SettingsProvider> */}
  </Provider>,
  document.getElementById("root")
);
