import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SignInModal } from "./SignInModal";
// import { NavDropdown } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

export const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  // const history = useHistory();

  const handleClose = () => setShowModal(false);
  const handleShow = (evt) => {
    setShowModal(true);
    evt.preventDefault();
    // const { history } = props;
    setShowModal(true);
    // history(history);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="S2.png"
            alt="Logo"
            width="45"
            height="45"
            className="d-inline-block align-middle"
          />
          {/* Scholarly */}
        </Link>
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
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {/* For WCS Classes Pages - test - */}
            {/* <li className="nav-item dropdown">
              <NavDropdown title="Classes" id="basic-nav-dropdown">
                <NavLink className="dropdown-item" to="Advanced">
                  <NavDropdown.Item href="Advanced">Advanced</NavDropdown.Item>
                </NavLink>
                <NavLink className="dropdown-item" to="Honors">
                  <NavDropdown.Item href="Honors">Honors</NavDropdown.Item>
                </NavLink>
                <NavLink className="dropdown-item" to="AP">
                  <NavDropdown.Item href="AP">AP</NavDropdown.Item>
                </NavLink>
              </NavDropdown>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="Classes">
                Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="Notes">
                Notes
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="_______________">
                Create Class
              </NavLink>
            </li> */}
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
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
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <NavLink className="dropdown-item" to="/Account">
                    Account
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/About">
                    About
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="btn btn-primary dropdown-item"
                    href="#"
                    onClick={handleShow}
                  >
                    Sign-In
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <SignInModal onClose={handleClose} setShowModal={setShowModal} />
      )}
    </nav>
  );
};
