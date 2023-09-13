// import React from "react";
// import { Container } from "react-bootstrap";
// // import { useAuth } from "../Firebase";

// export const Account = () => {
//   const { currentUser } = useAuth();

//   return (
//     <Container className="text-center">
//       <h1 style={{ marginTop: "20px" }}>Account Page</h1>
//       <p style={{ marginTop: "10px" }}>Welcome, {currentUser.displayName}!</p>
//     </Container>
//   );
// };

import React from "react";
import { Container } from "react-bootstrap";
import { useAuth } from "../Firebase.jsx";

export const Account = () => {
  const currentUser = useAuth(); // Use the useAuth hook to get the current user

  return (
    <Container className="text-center">
      <h1 style={{ marginTop: "20px" }}>Account Page</h1>
      {currentUser ? (
        <p style={{ marginTop: "10px" }}>Welcome, {currentUser.displayName}!</p>
      ) : (
        <p style={{ marginTop: "10px" }}>
          Please sign in to view your account.
        </p>
      )}
    </Container>
  );
};
