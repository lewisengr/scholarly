import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CreateClassModal } from "../components/CreateClassModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export const Classes = () => {
  const [showModal, setShowModal] = useState(false);
  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "classes"));
      const classList = [];
      querySnapshot.forEach((doc) => {
        classList.push({ ...doc.data(), docId: doc.id });
      });
      setClasses(classList);
    } catch (error) {
      console.log("Error fetching classes:", error);
    }
  };

  const handleCreateClass = (newClass) => {
    setClasses([...classes, newClass]);
    setShowModal(false);
  };

  const onCreate = (newClass) => {
    handleCreateClass(newClass);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div style={{}}>
      <Container className="p-5">
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="w-100 mb-3"
          style={{ height: "4rem", fontSize: "2rem" }}
        >
          Create Class
        </Button>
        {showModal && (
          <CreateClassModal
            onClose={() => setShowModal(false)}
            onCreate={onCreate}
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
                      Subject: {classObj.subject} <br />
                      Difficulty: {classObj.difficulty}
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