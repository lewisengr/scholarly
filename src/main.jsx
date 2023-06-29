import React from "react";
import { HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Navbar } from "./components/Navbar";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

const Root = () => (
  <HashRouter>
    <Navbar />
    <div className="container-fluid">
      <App />
    </div>
  </HashRouter>
);

root.render(<Root />);
