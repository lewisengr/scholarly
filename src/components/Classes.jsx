import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Classes = () => {
  return (
    <div style={{}}>
      <Container className="p-5">
        <Container className="text-center">
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Advanced</Card.Title>
                  <Card.Text>Description of advanced classes</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 6 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Honors</Card.Title>
                  <Card.Text>Description of honors classes</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>AP</Card.Title>
                  <Card.Text>Description of AP classes</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Classes;
