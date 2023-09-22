import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase.jsx";

export const CreateClassModal = ({ onClose, onCreate }) => {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [classDifficulty, setClassDifficulty] = useState("");
  const [error, setError] = useState("");

  const handleCreateClass = async () => {
    // Check if any of the fields are empty
    if (!className || !subject || !classDifficulty) {
      setError("Please fill in all the fields.");
      return;
    }

    const newClass = {
      name: className,
      subject,
      difficulty: classDifficulty,
      timestamp: serverTimestamp(),
    };

    try {
      // Reference to the "classes" collection
      const classesCollectionRef = collection(db, "classes");

      // Add a new document to the "classes" collection
      const docRef = await addDoc(classesCollectionRef, newClass);

      console.log("Class document created with ID: ", docRef.id);

      // Call the onCreate function to update the class list in Classes.jsx
      onCreate({ ...newClass, docId: docRef.id });

      onClose();
    } catch (error) {
      console.error("Error creating class:", error);
    }
  };

  return (
    <Modal show onHide={onClose} dialogClassName="modal-dialog-center">
      <Modal.Header closeButton>
        <Modal.Title>Class Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter class title"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Difficulty</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter difficulty level"
              value={classDifficulty}
              onChange={(e) => setClassDifficulty(e.target.value)}
            />
          </Form.Group>
        </Form>
        {error && <p className="text-danger">{error}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateClass}>
          Create Class
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
