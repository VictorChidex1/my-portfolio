import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ADD THIS basename="/my-portfolio" */}
    <BrowserRouter basename="/my-portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
