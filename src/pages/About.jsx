import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const About = () => {
  return (
    <div>
      <Container className="text-center">
        <h1 style={{ marginTop: "25px" }}>About Page</h1>
        <p style={{ marginTop: "10px" }}>This is the ABOUT page.</p>
      </Container>
      {/* <div style={{}}>
        <Container className="p-5"></Container>
      </div> */}
    </div>
  );
};
