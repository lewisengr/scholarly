import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CreateClassModal } from "../components/CreateClassModal";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
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

      // Immediately update the classes state with the newly created class
      setClasses((prevClasses) => [
        ...prevClasses,
        { ...classData, docId: docRef.id },
      ]);
    } catch (error) {
      console.error("Error creating class:", error);
    }
  };

  const handleCreateClass = async () => {
    setShowModal(true);
  };

  const handleDeleteClass = async (docId) => {
    try {
      // Reference to the "classes" collection
      const classesCollectionRef = collection(db, "classes");
      // Reference to the specific class document
      const classDocRef = doc(classesCollectionRef, docId);
      // Delete the class document using deleteDoc
      await deleteDoc(classDocRef);
      // Update the classes state to remove the deleted class
      setClasses((prevClasses) =>
        prevClasses.filter((classObj) => classObj.docId !== docId)
      );

      console.log("Class document deleted:", docId);
    } catch (error) {
      console.error("Error deleting class:", error);
    }
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
          onClick={handleCreateClass}
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
                      Created:{" "}
                      {classObj.timestamp
                        ? new Date(
                            classObj.timestamp.seconds * 1000
                          ).toLocaleString()
                        : "N/A"}
                    </small>
                    <Button
                      variant="secondary"
                      onClick={() => handleDeleteClass(classObj.docId)}
                      style={{ position: "absolute", bottom: "0", right: "0" }}
                      size="md"
                    >
                      Delete
                    </Button>
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
