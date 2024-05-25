import React from "react";
import styles from "./page assets/Pages.module.css";
import placeholderImage from "./page assets/placeholder.jpg";
import websiteBefore from "./page assets/first ever iteration of website.png";
import discordStart from "./page assets/discord start.png";
import dayThree from "./page assets/day three.png";
import daySix from "./page assets/day six.png";
import fourOhFour from "./page assets/404.png";

const AboutPage = () => {
  return (
    <div className="container">
      <div
        className="row align-items-center"
        style={{ paddingTop: "100px", paddingBottom: "25px" }}
      >
        {/* Section for the first screenshot and introduction */}
        <div className="col-md-12">
          <h1 className={styles.sectionTitle1}>More About This Website</h1>
          <p className={styles.sectionText1}>
            You are looking at the first iteration and first screenshot I took
            when making this website! As you can see, I used Vite, React, and
            TypeScript to build this website! I also used some bootstrap
            components. If you wanna hear me go in depth about the steps I took
            to build this website, scroll down!
          </p>
        </div>
        <div className="col-md-12" style={{ padding: "0px 100px" }}>
          <img
            src={websiteBefore}
            alt="first iteration"
            className={styles.sectionBigImg}
          />
        </div>
      </div>

      <div className="row align-items-center">
        {/* Section for Discord details and image */}
        <div className="col-md-12">
          <h1 className={styles.sectionTitle1}>Website Details</h1>
          <p className={styles.sectionText1}>
            As previously stated, this website was initially built using Vite,
            React, and TypeScript with some bootstrap components and React
            routing. I started building this website on May 10th, shortly after
            finishing my spring semester. To keep myself honest, I started a
            discord with just me in it, detailing the steps I took to build this
            website, some sources that were useful, as well as some notes I took
            while building the website, so I could understand and take in what I
            was learning! You can find a screenshot of my first entry in that
            discord right here:
          </p>
        </div>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <img
            src={discordStart}
            alt="discord start"
            className={styles.sectionBigImg}
          />
        </div>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          I don't have any background in React, or any type of JavaScript,
          basically anything that has to do with Web Development. So I sought
          out some resources on YouTube, read some of the docs of these
          frameworks and got to work! The first lesson I found on YouTube was
          using Vite and TypeScript with React, so I followed those steps to
          start the website page and began adding components!
        </p>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          Now at this point at the development of this website, I had my first
          component, my Navbar! You can see this iteration of the website at the
          top of this page, that was my first screenshot I took when marking my
          development journey. This was day two, and on day three, I had a major
          breakthrough in style, layout, and routing.
        </p>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <img
            src={dayThree}
            alt="day three"
            className={styles.sectionBigImg}
          />
        </div>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          We have some semblance of a website! This was my home page around May
          16th. Basically, I was filling out each page with a basic structure of
          what I wanted for each page, while having filler latin gibberish. I
          was trying to get a grasp of how backgrounds, styling, and formatting
          text worked. Again, this is my first time working with web dev stuff,
          so this was all new to me. But, noticeably, there is a little sun guy
          in the bottom right! That is my dark mode/light mode selector! I
          really wanted to have the user be able to have that customizability,
          so I added this component, it's a really simple button component, give
          it a click!
        </p>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          Now, we are moving on to day four. At this point, I really wanted to
          focus on style, as well as actually filling the website with
          information about me. This was the day to do it. I was having trouble
          with actually having the light mode/dark mode button switch to the
          right color pallete, but day four was the day to fix it.
        </p>
        <iframe
          className={styles.sectionVideo}
          src="https://drive.google.com/file/d/1_pzxF2_7YDDAoNaUMGoB1x2_fHf8SBUL/preview?usp=drivesdk"
          allow="encrypted-media"
        ></iframe>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          There are actually several more screenshots of pages with their added
          text to it, as well as the finalized styling that I chose for the
          website, but I'll spare you the details, as you can just start going
          around the website and seeing how they look for themselves. As time
          went on, this project grew larger and larger, and more ideas of what I
          want to include on this website were being thought up, and further
          motivated me.
        </p>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          Moving on to day five and day six, and we are basically almost done! I
          added the projects I wanted to show off to the projects tab, as well
          as any needed information either on this page or the projects page! I
          also began updating the home page, adding my face and some hyper links
          to lead to other pages for convenience.
        </p>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <img src={daySix} alt="day six" className={styles.sectionBigImg} />
        </div>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          Initially, I thought I had ran into all the problems or moments of
          notable progress after day 6, but attempting to figure out deploying
          and publishing this website was a several hour ordeal! I chose to host
          my website on GitHub pages. Shortly after uploading and updating my
          GitHub, I found out you could host websites on there too! So I began
          the arduous process of figuring out how to do it.
        </p>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          Initially, I had to install the GitHub pages package, and, admittedly,
          that was the easiest part. After that, I ran into several issues
          regarding how to go about deploying the website, as several tutorials
          online led me to various directions, which caused me to have to revert
          to an old commit of the website as the website practically broke! (You
          can find these commits on my GitHub, and watch me struggle) At this
          point, I felt super demotivated, confused, and contemplating taking a
          new approach to hosting the site. But, I went on, and found the most
          low tech, weird tutorial that was so bare bones, that it fixed all my
          problems! I was finally able to get the site up and running. Then, I
          ran into my first issue with GitHub Pages.
        </p>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <img src={fourOhFour} alt="404" className={styles.sectionBigImg} />
        </div>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          This 404 error was so, so frustrating. Apparently, GitHub pages is not
          meant to handle single page apps, which means upon refreshing any page
          on my website, I would immediately get 404'ed. Luckily, this error is
          common, so I was able to find several solutions online, however, none
          seemed to work in my case. Obviously, none of these errors or problems
          should be problems for most people, as this is my first venture in web
          dev, and realistically, I have no idea what I am doing, but I am
          learning. Now, to fix this error, I had to place an HTML file in my
          public folder, which handles this error for GitHub pages, as well as a
          script in my index.html file. After those fixes, refreshing the page
          actually worked! At this point, we are done!
        </p>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          Now for finishing touches, I added ways for users of this website to
          contact me or find me via GitHub, LinkedIn, and Email! I changed my
          Resume page to also have contact info for me, as well as added some
          social media links to my Navbar for ease of access. This means we are
          at the current iteration of the website as of May 25th, 2024!
        </p>
        <p className={styles.sectionText1} style={{ padding: "15px 0px" }}>
          If you took the time to read this, thank you so much! It means the
          world to me that someone was interested in how I created this website.
          I loved being able to do it, while learning along the way!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
