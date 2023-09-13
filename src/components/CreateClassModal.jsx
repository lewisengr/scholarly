import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase.jsx";
import { Timestamp } from "firebase/firestore";

export const CreateClassModal = ({ onClose, onCreate }) => {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [classDifficulty, setClassDifficulty] = useState("");

  const handleCreateClass = async () => {
    const newClass = {
      id: Date.now(),
      name: className,
      subject,
      difficulty: classDifficulty,
      timestamp: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "classes"), newClass);
      newClass.docId = docRef.id;
      onCreate(newClass);
      onClose();
    } catch (error) {
      console.log("Error creating class:", error);
    }
  };

  return (
    <Modal show onHide={onClose} dialogClassName="modal-dialog-center">
      <Modal.Header closeButton>
        <Modal.Title>Class Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="class-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="class-name"
            placeholder="Enter class title"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="class-difficulty">Difficulty</label>
          <input
            type="text"
            className="form-control"
            id="class-difficulty"
            placeholder="Enter difficulty level"
            value={classDifficulty}
            onChange={(e) => setClassDifficulty(e.target.value)}
          />
        </div>
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

export default CreateClassModal;
