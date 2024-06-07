import React from "react";
import styles from "./page assets/Pages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ResumePage = () => {
  return (
    <div
      className="container"
      style={{
        maxWidth: "800px",
        margin: "auto",
        paddingTop: "50px",
        paddingBottom: "25px",
      }}
    >
      <h1 className={styles.sectionTitle1} style={{ paddingTop: "50px" }}>
        Resume/Contact Info
      </h1>
      <p className={styles.sectionText1}>
        This is my current resume as of June 2024.
      </p>
      <div
        style={{ position: "relative", overflow: "hidden", paddingTop: "100%" }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src="https://drive.google.com/file/d/1IMpgGCNlQTeL8rSCANpPzpF_zuBSAiXk/preview?usp=drivesdk"
        ></iframe>
      </div>
      <p
        className={styles.sectionText1}
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        If you would like to contact me, or learn more about me, below is a link
        to my Email and my GitHub!
      </p>
      <div style={{ fontSize: "24px", textAlign: "center", margin: "20px" }}>
        <a
          href="https://github.com/angelheredia138"
          style={{ margin: "10px" }}
          className={styles.linkStyle}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/herediafangel/"
          style={{ margin: "10px" }}
          className={styles.linkStyle}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:herediafangel@gmail.com"
          style={{ margin: "10px" }}
          className={styles.linkStyle}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
