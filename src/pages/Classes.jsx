import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CreateClassModal } from "../components/CreateClassModal";

export const Classes = () => {
  const [showModal, setShowModal] = useState(false);
  const [classes, setClasses] = useState([]);

  const handleCreateClass = (newClass) => {
    setClasses([...classes, newClass]);
    setShowModal(false);
    // Navigate to a new tab that displays all the classes
  };

  return (
    <div style={{}}>
      <Container className="p-5">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Create Class
        </Button>
        {showModal && (
          <CreateClassModal
            onClose={() => setShowModal(false)}
            onCreate={handleCreateClass}
          />
        )}
        <Container className="text-center">
          <Row className="row-cols-1 row-cols-md-3 g-4">
            {classes.map((classObj) => (
              <Col key={classObj.id}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{classObj.name}</Card.Title>
                    <Card.Text>
                      Description of {classObj.name} classes
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 6 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Classes;
