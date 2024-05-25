import React from "react";
import styles from "./page assets/Pages.module.css";

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
      <h1 className={styles.sectionTitle1}>Resume/Contact Info</h1>
      <p className={styles.sectionText1}>
        This is my current resume as of May 2024.
      </p>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "100%", // 16:9 Aspect Ratio, adjust if needed
        }}
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
          src="https://drive.google.com/file/d/18B99yQXP3jeKf213axJeoG_8FrOGP0JW/preview?usp=drivesdk"
        ></iframe>
      </div>
      <p className={styles.sectionText1}>insert contact me here</p>
    </div>
  );
};

export default ResumePage;
