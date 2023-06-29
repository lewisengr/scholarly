import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { signInWithGoogle } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignInModal = ({ onClose, setShowModal }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        console.log("User signed in with Google:", user);
        onClose();
      })
      .catch((error) => {
        console.log("Error signing in with Google:", error);
        setErrorMessage("Error signing in with Google. Please try again.");
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential.user);
        onClose();
      })
      .catch((error) => {
        console.log("Error signing in:", error);
        setErrorMessage("Error signing in. Please try again.");
      });
  };

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <Modal
      show
      onHide={handleClose}
      dialogClassName="modal-dialog-center"
      className="modal-l"
    >
      <Modal.Header closeButton>
        <Modal.Title>Sign-In Below</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Sign-In
            </Button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <div className="text-left"> */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        {/* </div> */}
        <Button
          variant="primary"
          type="submit"
          onClick={handleSignInWithGoogle}
        >
          Sign-In with Google
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
