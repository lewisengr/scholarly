import React, { useState } from "react";
import { SignInModal } from "./SignInModal";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = (evt) => {
    setShowModal(true);
    evt.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="S2.png"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-middle"
          />
          {/* Scholarly */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Classes
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/Advanced">Advanced</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/Honors">Honors</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/AP">AP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </a>
              <ul className="dropdown-menu  dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#" onClick={handleShow}>
                    Sign-In
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Account">
                    Account
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/About">
                    About
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {showModal && <SignInModal onClose={handleClose} />}
    </nav>
  );
};
