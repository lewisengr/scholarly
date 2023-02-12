// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/scholarly/" element={ <App /> }>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import App from "./App";
import "./index.css";

import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const root = createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Navbar/>
    <App/>
  </HashRouter>
);