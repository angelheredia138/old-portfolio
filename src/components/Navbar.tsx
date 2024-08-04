// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLoading } from "../../src/Context/LoadingContext";

const Navbar = () => {
  const { isLoading } = useLoading();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return null;
  }

  const toggle = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navbarCustom}`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand ${styles.navbarBrand}`}
          style={{ paddingLeft: "10px" }}
          to="/"
          onClick={closeNavbar}
        >
          Angel Heredia
        </Link>
        <div
          className="navbar-social-links"
          style={{ display: "inline-block" }}
        >
          <a
            href="https://github.com/angelheredia138"
            className={`navbar-link ${styles.navbarLink}`}
            style={{ marginLeft: "20px", fontSize: "25px" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/herediafangel/"
            className={`navbar-link ${styles.navbarLink}`}
            style={{ marginLeft: "20px", fontSize: "25px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:herediafangel@gmail.com"
            className={`navbar-link ${styles.navbarLink}`}
            style={{ marginLeft: "20px", fontSize: "25px" }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
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
                to="/past-projects"
                onClick={closeNavbar}
              >
                Past Projects
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
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.navLink}`}
                to="/blog"
                onClick={closeNavbar}
              >
                Blog Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
