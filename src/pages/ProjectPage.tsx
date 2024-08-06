import React from "react";
import styles from "./page assets/Pages.module.css";
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
            <a
              href="https://github.com/angelheredia138/"
              className={styles.linkStyle}
            >
              {" "}
              GitHub
            </a>{" "}
            for the source code!
          </p>
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-6">
          <h2 className={styles.sectionTitle1}>Portfolio Website</h2>
          <p className={styles.sectionText}>
            This website is one of my personal projects! I wrote this website
            completely using React and TypeScript with help from Vite and some
            Bootstrap components! This was my first time ever using any web dev
            tools, HTML, TypeScript, and all that comes with it. If you'd like
            to see a more detailed breakdown of my journey while building this
            website, check out{" "}
            <Link to="/about" className={styles.linkStyle}>
              About this Website
            </Link>
            . There you can find where I started, and where I am now! I plan to
            continuously update this website with any other projects I work on,
            as well as any style changes whenever I do make any!
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={website}
            alt="Website"
            className={styles.sectionBigImg}
            onLoad={() => {}}
          />
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-6">
          <h2 className={styles.sectionTitle1}>Spotify Playback Controller</h2>
          <p className={styles.sectionText}>
            This project was born out of necessity. Whenever I played video
            games, alt-tabbing to control my Spotify playback would sometimes
            crash my computer. To solve this, I coded this project, with the
            intention of integrating it with a Raspberry Pi 4 connected to a
            touchscreen, allowing me to manage my Spotify playback seamlessly.
            With this setup, I can skip, pause, play, and change playlists
            without needing to alt-tab, ensuring a smooth gaming experience. The
            controller features a user-friendly interface built with React and
            Chakra UI, and communicates with Spotify's API through a Django
            backend. Check out the source code on
            <a
              href="https://github.com/angelheredia138/spotify-playback-control-public"
              className={styles.linkStyle}
            >
              {" "}
              GitHub{" "}
            </a>
            and try it out for yourself! If you'd like to check out a small
            physical and technical demo of it, check out this video on the
            right!
          </p>
        </div>
        <div className="col-md-6">
          <div className={styles.sectionVideo}>
            <iframe
              style={{ width: "100%", height: "100%", border: "none" }}
              src="https://drive.google.com/file/d/1epnYQEEVe3KQsZTN8OyXlPsyJYPs8sOY/preview?usp=drivesdk"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-6">
          <h2 className={styles.sectionTitle1}>Spotify Data Visualization</h2>
          <p className={styles.sectionText}>
            The Spotify Data Visualization project showcases my ability to
            combine data analysis with interactive graphics. Using React and
            Vite, I developed a series of charts that provide insights into
            listening habits. This project includes a Spotify Wrapped-style
            presentation, complete with a scrolling feature for navigating
            through different visualizations. The charts were created using
            D3.js and encompass various types such as bar charts, scatter plots,
            and radar charts. This was also my first time using Django in
            production and hosting the backend on Amazon ECS, ensuring a robust
            and scalable deployment. For more details, you can check out the
            source code on my
            <a
              href="https://github.com/angelheredia138/spotify-visualizer"
              className={styles.linkStyle}
            >
              {" "}
              GitHub
            </a>
            , or visit the live demo to the right!
          </p>
        </div>
        <div className="col-md-6" style={{ position: "relative" }}>
          <div className={styles.sectionVideo}>
            <iframe
              style={{ width: "100%", height: "400px", border: "none" }}
              src="https://angel-heredia.com/spotify-visualizer-frontend"
              allow="encrypted-media"
            ></iframe>
          </div>
          <a
            href="https://angel-heredia.com/spotify-visualizer-frontend"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              display: "block",
            }}
          ></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
