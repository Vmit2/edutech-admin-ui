import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./config/fonts.css";
import "./index.css";
import { ReactQueryDevtools } from "react-query-devtools";
import { configureStore } from "./redux/store";
// core components

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReactQueryDevtools />
  </Provider>,
  document.getElementById("root")
);
