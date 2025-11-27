import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Check if we are running on GitHub Pages (which usually puts the repo name in the URL)
// If the hostname includes 'github.io', we use the repo name as the basename.
// Otherwise (localhost, Vercel, etc.), we use '/' (no basename).
const isGitHubPages = window.location.hostname.includes("github.io");
const basename = isGitHubPages ? "/my-portfolio" : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
