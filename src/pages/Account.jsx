import React from "react";
import { Container } from "react-bootstrap";
// import { useAuth } from "../Firebase"; 

export const Account = () => {
  const { currentUser } = useAuth(); 

  return (
    <Container className="text-center">
      <h1 style={{ marginTop: "20px" }}>Account Page</h1>
      <p style={{ marginTop: "10px" }}>Welcome, {currentUser.displayName}!</p>
    </Container>
  );
};
