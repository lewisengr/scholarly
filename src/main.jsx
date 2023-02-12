import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const root = createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Navbar />
    <div className="container-fluid">
      <App />
    </div>
  </HashRouter>
);
