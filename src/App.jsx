import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Account, Home, AP, Advanced, Honors, Notes } from "./pages";
// import { gapi } from "gapi-script";
// import LoginButton from "./components/login";
// import LogoutButton from "./components/logout";
import { signInWithGoogle } from "./Firebase";

function App() {
  return (
    <div>
      {/* <button onClick={() => signInWithGoogle()}>Sign In With Google</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Advanced" element={<Advanced />} />
        <Route path="Honors" element={<Honors />} />
        <Route path="AP" element={<AP />} />
        <Route path="About" element={<About />} />
        <Route path="Account" element={<Account />} />
        <Route path="Notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
