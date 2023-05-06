import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { signInWithGoogle } from "../Firebase";

export const SignInModal = ({ onClose }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSignIn = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username) {
      usernameRef.current.focus();
    } else if (!password) {
      passwordRef.current.focus();
    }

    if (!username || !password) {
      setErrorMessage("Both username and password are required.");
      return;
    }

    setErrorMessage("");
    setShowModal(false);
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <Modal
      show
      onHide={onClose}
      dialogClassName="modal-dialog-center"
      className="modal-l"
    >
      <Modal.Header closeButton>
        <Modal.Title>Sign-In Below</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={usernameRef}
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Button variant="primary" onClick={() => signInWithGoogle()}>
            Sign In with Google
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSignIn}>
          Sign-In
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
