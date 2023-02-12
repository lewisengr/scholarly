import React, { useState } from "react";
import { SignInModal } from "./SignInModal";
// import { Dropdown } from "react-bootstrap";

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
        <a className="navbar-brand" href="/scholarly/">
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
              <a
                className="nav-link active"
                aria-current="page"
                href="/scholarly/"
              >
                Home
              </a>
            </li>
            {/* <Dropdown className="d-inline mx-2"> */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/scholarly/Classes"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Classes
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/scholarly/Advanced">
                      Advanced
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/scholarly/Honors">
                      Honors
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="/scholarly/AP">
                      AP
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <Dropdown.Menu>
                <Dropdown.Item href="/scholarly/Advanced">
                  Advanced
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/scholarly/Honors">Honors</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/scholarly/AP">AP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </ul>
          <form className="d-flex ms-auto" role="search">
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
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/scholarly/Account"
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
                  <a className="dropdown-item" href="/scholarly/Account">
                    Account
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/scholarly/About">
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
