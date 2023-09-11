import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Account, Home, Notes, Classes } from "./index";
// import { signInWithGoogle } from "./Firebase";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Account" element={<Account />} />
        <Route path="Notes" element={<Notes />} />
        <Route path="Classes" element={<Classes />} />
      </Routes>
    </div>
  );
}

export default App;
