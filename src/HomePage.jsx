import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSignIn = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      setErrorMessage("Both username and password are required.");
      return;
    }

    setErrorMessage("");
    setShowModal(false);
  };

  return (
    <header className="header">
      <div>
        <a href="#">
          <h1 className="header-title">Scholarly</h1>
        </a>
      </div>
      <div className="header-right">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <Modal
        show={showModal}
        onHide={handleClose}
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
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignIn}>
            Sign-In
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default HomePage;
