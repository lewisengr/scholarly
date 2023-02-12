// import React from "react";
// import { Navbar } from "./components/Navbar";
// import { Classes } from "./components/Classes";
// import Advanced from "./Pages/Advanced.jsx";
// import Honors from "./Pages/Honors.jsx";
// import AP from "./Pages/AP.jsx";
// import { Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//   <Routes>
//     <div>
//       <Navbar />
//       <Classes />
//     </div>
//     <Route path="/scholarly/Advanced" component={Advanced} />
//     <Route path="/scholarly/Honors" component={Honors} />
//     <Route path="/scholarly/AP" component={AP} />
//   </Routes>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Classes from "./components/Classes";
// import Advanced from "./Pages/Advanced.jsx";
// import Honors from "./Pages/Honors.jsx";
// import AP from "./Pages/AP.jsx";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Classes />
//       </div>
//       <Route path="/advanced" component={Advanced} />
//       <Route path="/honors" component={Honors} />
//       <Route path="/AP" component={AP} />
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { Navbar } from "./components/Navbar";
// import { Classes } from "./components/Classes";
// import Advanced from "./pages/Advanced.jsx";
// import Honors from "./pages/Honors.jsx";
// import AP from "./pages/AP.jsx";
// import { HashRouter, Route } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Classes />
//       <HashRouter>
//         <Route path="/advanced" component={Advanced} />
//         <Route path="/honors" component={Honors} />
//         <Route path="/AP" component={AP} />
//       </HashRouter>
//     </div>
//   );
// }

// export default App;

// WITH hashrouter
// import React from "react";
// import { Navbar } from "./components/Navbar";
// import { Classes } from "./components/Classes";
// import Advanced from "./pages/Advanced.jsx";
// import Honors from "./pages/Honors.jsx";
// import AP from "./pages/AP.jsx";
// import { HashRouter, Route } from "react-router-dom";

// function App() {
//   return (
//     <HashRouter>
//       <div>
//         <Navbar />
//         <Classes />
//         <Route path="/scholarly/Advanced" component={Advanced} />
//         <Route path="/scholarly/Honors" component={Honors} />
//         <Route path="/scholarly/AP" component={AP} />
//       </div>
//     </HashRouter>
//   );
// }

// export default App;

// import React from "react";
// import { Navbar } from "./components/Navbar";
// import { Classes } from "./components/Classes";
// import Advanced from "./pages/Advanced.jsx";
// import Honors from "./pages/Honors.jsx";
// import AP from "./pages/AP.jsx";
// import { BrowserRouter, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Classes />
//         <Route path="/scholarly/Advanced" component={Advanced} />
//         <Route path="/scholarly/Honors" component={Honors} />
//         <Route path="/scholarly/AP" component={AP} />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Account, Home, AP, Advanced, Honors } from "./pages";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Advanced" element={<Advanced/>} />
      <Route path="Honors" element={<Honors/>} />
      <Route path="AP" element={<AP/>} />
      <Route path="About" element={<About/>} />
      <Route path="Account" element={<Account/>} />
    </Routes>
  );
}

export default App;
