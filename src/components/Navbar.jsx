import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignInModal } from "./SignInModal";

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
        <Link className="navbar-brand" to="/">
          <img
            src="S2.png"
            alt="Logo"
            width="50"
            height="50"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Classes
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="Advanced">
                      Advanced
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Honors">
                      Honors
                    </Link>
                  </li>
                  <li></li>
                  <li>
                    <Link className="dropdown-item" to="AP">
                      AP
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
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
                  <Link className="dropdown-item" to="Account">
                    Account
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="About">
                    About
                  </Link>
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
