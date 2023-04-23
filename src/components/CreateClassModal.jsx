import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const CreateClassModal = ({ onClose }) => {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [classDifficulty, setClassDifficulty] = useState("");

  const handleCreateClass = () => {
    // Handle creating class logic here
    onClose(); // Close the modal
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
