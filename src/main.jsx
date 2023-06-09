import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { HashRouter } from "react-router-dom";

const store = configureStore({
  reducer: rootReducers,
  thunk,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
