import React from "react";
import styles from "./Loader.module.css";
import { Typewriter } from "react-simple-typewriter";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.typingAnimation}>
        <Typewriter
          words={["angel-heredia.com"]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={300} // Adjust delay if necessary
        />
      </div>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
