import React, { useState } from "react";
import { Modal, Button, Toast } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import { signInWithGoogle } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignInModal = ({ onClose, setShowModal }) => {
  const [errorMessage, setErrorMessage] = useState("");
  // const history = useHistory();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        console.log("User signed in with Google:", user);
        // setShowModal(true);
        setToastMessage("Successfully signed in with Google.");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
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
        // setShowModal(true);
        setToastMessage("Successfully signed in.");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((error) => {
        console.log("Error signing in:", error);
        setErrorMessage("Error signing in. Please try again.");
      });
  };

  return (
    <>
      {!toastMessage && (
        <Modal
          show={!toastMessage}
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
          <Modal.Footer className="justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSignInWithGoogle}
            >
              Sign-In with Google
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: "absolute",
          top: 15,
          right: 15,
        }}
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">TEST!</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </>
  );
};
