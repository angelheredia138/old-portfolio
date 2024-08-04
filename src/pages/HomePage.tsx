import React, { useEffect, useState } from "react";
import styles from "./page assets/Pages.module.css";
import myFace from "./page assets/my face.png";
import { Link } from "react-router-dom";
import BlogAlertModal from "../components/BlogAlertModal";
import Loader from "../components/Loader";
import { useLoading } from "../../src/Context/LoadingContext";

const HomePage = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const currentTheme = document.body.className || "body";
    setTheme(currentTheme);

    // Simulate image loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the time as needed

    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <BlogAlertModal theme={theme} />

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

      {/* New Blog Page Section */}
      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-12">
          <h2 className={styles.sectionTitle1}>New Blog Page!</h2>
          <p className={styles.sectionText}>
            I have recently added a new blog page to this website where I will
            be sharing ongoing updates about this website and any blog posts
            about potential projects I am working on. Stay updated with my
            latest work and thoughts by visiting the blog page{" "}
            <Link to="/blog" className={styles.linkStyle}>
              here
            </Link>
            !
          </p>
        </div>
      </div>

      {/* New Past Projects Section */}
      <div className="row align-items-center" style={{ padding: "50px 0" }}>
        <div className="col-md-12">
          <h2 className={styles.sectionTitle1}>Past Projects Page!</h2>
          <p className={styles.sectionText}>
            I have also added a page for my past projects. These are older
            projects that I am not actively updating, but you can still check
            them out. Visit the past projects page{" "}
            <Link to="/past-projects" className={styles.linkStyle}>
              here
            </Link>
            !
          </p>
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
