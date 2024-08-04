import React from "react";
import styles from "./page assets/Pages.module.css";
import retroGames from "./page assets/retro games.png";

const PastProjectsPage = () => {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ paddingTop: "100px" }}>
        <div className="col-md-12">
          <h1 className={styles.sectionTitle1}>Past Projects</h1>
          <p className={styles.sectionText1}>
            Here are some of my older projects that I am not actively updating,
            but you can still check them out on my
            <a
              href="https://github.com/angelheredia138/"
              className={styles.linkStyle}
            >
              {" "}
              GitHub
            </a>
            .
          </p>
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "20px 0" }}>
        <div className="col-md-3">
          <img
            src={retroGames}
            alt="Retro Games"
            className={styles.sectionSmallImg}
            onLoad={() => {}}
          />
        </div>
        <div className="col-md-9">
          <h2 className={styles.sectionTitle2}>Retro Games in JavaScript</h2>
          <p className={styles.sectionText}>
            A collection of classic games like 2048, Pong, Snake, and
            Minesweeper recreated using React. Dive into the source code and
            relive some nostalgia!
          </p>
          <a
            href="https://github.com/angelheredia138/retro-games-in-javascript"
            className={styles.linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="row align-items-center" style={{ padding: "20px 0" }}>
        <div className="col-md-3">
          <div className={styles.sectionSmallVideo}>
            <iframe
              style={{ width: "100%", height: "100%", border: "none" }}
              src="https://drive.google.com/file/d/1mRC1ygp5W-lJagxYucOhRNY4ILQlZT9p/preview?usp=drivesdk"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
        <div className="col-md-9">
          <h2 className={styles.sectionTitle2}>Wardrobe App</h2>
          <p className={styles.sectionText}>
            An app that helps you manage your wardrobe and suggests outfits
            based on the weather. Built with SwiftUI and Core Data.
          </p>
          <a
            href="https://github.com/angelheredia138/wardrobe-app"
            className={styles.linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default PastProjectsPage;
