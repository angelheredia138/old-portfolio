import React from "react";
import styles from "./page assets/Pages.module.css";
import placeholderImage from "./page assets/placeholder.jpg";
import myFace from "./page assets/my face.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ padding: "100px 0" }}>
        <div className="col-md-6">
          <h1 className={styles.sectionTitle}>Welcome to My Portfolio</h1>
          <p className={styles.sectionText}>
            Hello! My name is Angel Heredia. I am a fourth year student at
            Arizona State University, pursuing a degree in Computer Science!
            This website will hold all current projects I am working on and any
            future projects I plan on working on in my spare time, as well as an
            ongoing log of this website's updates and my own resume.
          </p>
        </div>
        <div className="col-md-6">
          <img src={myFace} alt="my face" className={styles.sectionImg} />
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-12">
          <h2 className={styles.sectionTitle1}>Bit About Me</h2>
          <p className={styles.sectionText}>
            As I prepare for my 2025 graduation, I am excited to get started in
            my career and continously prosper in tech! I've always enjoyed the
            ins and outs of computers, and I cannot wait to get my career
            started! I am completely open to any position offered that can help
            grow my expertise in computer science. If you'd like to take a look
            at my resume, click{" "}
            <Link to="/resume" className={styles.linkStyle}>
              here
            </Link>
            !
          </p>
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-12">
          <h2 className={styles.sectionTitle1}>My Work</h2>
          <p className={styles.sectionText}>
            Currently, the work I am most proud of and displaying on this
            portfolio is my app I developed a part of my Principles of Mobile
            App Development class and THIS website. You can find more details
            about these projects in the{" "}
            <Link to="/projects" className={styles.linkStyle}>
              Projects tab
            </Link>{" "}
            at the top right of this page and I go much more in depth about this
            website in the{" "}
            <Link to="/about" className={styles.linkStyle}>
              {" "}
              About this Website
            </Link>{" "}
            page. You can find before and after pictures detailing my process
            building this website, as well as any future updates I make upon
            publishing this website!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
