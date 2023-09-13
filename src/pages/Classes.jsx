import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CreateClassModal } from "../components/CreateClassModal";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase.jsx";

export const Classes = () => {
  const [showModal, setShowModal] = useState(false);
  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "classes"));
      const classList = [];
      querySnapshot.forEach((doc) => {
        const classData = { ...doc.data(), docId: doc.id };
        // Check if the "timestamp" field exists in the document
        if ("timestamp" in classData) {
          classList.push(classData);
        }
      });
      setClasses(classList);
    } catch (error) {
      console.log("Error fetching classes:", error);
    }
  };

  const createClass = async (classData) => {
    try {
      // Reference to the "classes" collection
      const classesCollectionRef = collection(db, "classes");

      // Add a new document to the "classes" collection
      const docRef = await addDoc(classesCollectionRef, classData);

      console.log("Class document created with ID: ", docRef.id);
    } catch (error) {
      console.error("Error creating class:", error);
    }
  };

  const handleCreateClass = (newClass) => {
    createClass(newClass); // Call the createClass function to create a new document
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
              <Col key={classObj.docId}>
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
                      Created: {new Date(classObj.timestamp).toLocaleString()}
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
