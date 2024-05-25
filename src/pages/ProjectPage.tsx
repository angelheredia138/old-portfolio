import React from "react";
import styles from "./page assets/Pages.module.css";
import placeholderImage from "./page assets/placeholder.jpg";
import website from "./page assets/website.png";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ paddingTop: "100px" }}>
        <div className="col-md-12">
          <h1 className={styles.sectionTitle1}>About my Projects</h1>
          <p className={styles.sectionText1}>
            At the moment, I have only a couple projects to show off, this
            portfolio website, and my wardrobe app. To find more details about
            each, you can read the blurbs written below, or take a look at my
            GitHub for the source code!
          </p>
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-6">
          <h2 className={styles.sectionTitle1}>Portfolio Website</h2>
          <p className={styles.sectionText}>
            This website is one of my personal projects! I wrote this website
            copmpletely using React and TypeScript with help from Vite and some
            Bootstrap components! This was my first time ever using any web dev
            tools, HTML, TypeScript and all that! If you'd like to see a more
            detailed breakdown of my journey while building this website, check
            out{" "}
            <Link to="/about" className={styles.linkStyle}>
              {" "}
              About this Website
            </Link>
            {""}. There you can find where I started, and where I am now! I plan
            to continuously update this website with any other projects I work
            on, as well as any style changes whenever I do make any!
          </p>
        </div>
        <div className="col-md-6">
          <img src={website} alt="Website" className={styles.sectionBigImg} />
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-6">
          <h2 className={styles.sectionTitle1}>MyDrobe</h2>
          <p className={styles.sectionText}>
            This was my final project for my Principles in Application
            Development class, the task was to completely come up with and
            develop an app that followed the following criteria: the project
            must have persistent data storage, must use the MVVM architecture so
            that data, view, and logic of the app are divided into appropriate
            modules, it must use remote Web Services and Web API calls, and it
            must use map and location-based map functionality. The video to the
            right is my final techincal presentation, detailing and showing a
            quick demo of the app. If you would like to see the app's source
            code, check it out on my
            <a
              className={styles.linkStyle}
              href="https://github.com/angelheredia138/"
            >
              {" "}
              GitHub.
            </a>
          </p>
        </div>
        <div className="col-md-6">
          <iframe
            width="560"
            height="315"
            src="https://drive.google.com/file/d/1mRC1ygp5W-lJagxYucOhRNY4ILQlZT9p/preview?usp=drivesdk"
            data-allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
