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
        <h5 onClick={() => setShowDropdown(!showDropdown)}>Settings</h5>
        {showDropdown && (
          <div className="dropdown-menu">
            <a href="#">Account</a>
            <a href="#" onClick={handleShow}>
              Sign-in
            </a>
          </div>
        )}
      </div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Classes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Create
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Calendar
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog-center"
        className="modal-l"
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In Below</Modal.Title>
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
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default HomePage;
