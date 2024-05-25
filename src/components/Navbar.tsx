import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Ensure styles are imported

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navbarCustom}`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand ${styles.navbarBrand}`}
          to="/"
          onClick={closeNavbar}
        >
          Angel Heredia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isOpen ? "show" : ""} collapse navbar-collapse ${
            styles.navbarCollapse
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.navLink}`}
                to="/about"
                onClick={closeNavbar}
              >
                About This Website
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.navLink}`}
                to="/projects"
                onClick={closeNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.navLink}`}
                to="/resume"
                onClick={closeNavbar}
              >
                Resume/Contact Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
