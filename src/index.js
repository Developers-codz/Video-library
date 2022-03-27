import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AsideProvider } from "./context/aside-context";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AsideProvider>
        <App />
      </AsideProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
