import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { AppProvider } from "./components/Context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
