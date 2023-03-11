import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Account, Home, AP, Advanced, Honors, Notes } from "./pages";
import EditableText from "./components/EditableText";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Advanced" element={<Advanced />} />
      <Route path="Honors" element={<Honors />} />
      <Route path="AP" element={<AP />} />
      <Route path="About" element={<About />} />
      <Route path="Account" element={<Account />} />
      <Route path="Notes" element={<Notes />} />
      <Route path="EditableText" element={<EditableText />} />
    </Routes>
  );
}

export default App;
