import React from "react";
import styles from "./page assets/Pages.module.css";
import retroGames from "./page assets/retro games.png";
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
          <img src={website} alt="Website" className={styles.sectionBigImg} />
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
            physical and techincal demo of it, check out this video on the
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
          <h2 className={styles.sectionTitle1}>Retro Games in JavaScript</h2>
          <p className={styles.sectionText}>
            The Retro Games Collection is one of my latest personal projects,
            where I've recreated classic games like 2048, Pong, Snake, and
            Minesweeper using React. This project allowed me to dive deep into
            modern web technologies and enhance my JavaScript and game
            development skills. Each game is fully interactive and provides a
            nostalgic gaming experience with a modern twist. If you'd like to
            explore the source code and see these games in action, check out the
            Retro Games Collection on my{" "}
            <a
              href="https://github.com/angelheredia138/"
              className={styles.linkStyle}
            >
              {" "}
              GitHub
            </a>
            . Or, visit it{" "}
            <a
              href="https://angel-heredia.com/retro-games-in-javascript"
              className={styles.linkStyle}
            >
              {" "}
              here
            </a>{" "}
            and play a few games!
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={retroGames}
            alt="RetroGameSimulator"
            className={styles.sectionBigImg}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
