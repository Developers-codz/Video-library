import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AsideProvider } from "context/aside-context";
import { VideoProvider } from "context/video-context";
import { AuthProvider } from "context/auth-context";
import { ToastProvider } from "context/toast-context";
import App from "App";
import { makeServer } from "server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <AuthProvider>
          <VideoProvider>
            <AsideProvider>
              <App />
            </AsideProvider>
          </VideoProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
