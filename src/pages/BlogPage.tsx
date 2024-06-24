import React from "react";
import styles from "./page assets/Pages.module.css";

const BlogPage: React.FC = () => {
  const blogEntries = [
    {
      date: "June 23, 2024",
      title:
        "Building a Spotify Playback Controller: My Journey from Start to Finish",
      content: `
        <p><strong>Introduction</strong></p>
        <p>Sometimes while playing video games, I'd have to alt-tab to change music, which would often crash my computer, causing me to relaunch the game, potentially losing rounds, and ultimately losing the game for my team. So, I decided to build a Spotify Playback Controller using a Raspberry Pi 4 with a touchscreen, allowing me to control my music without leaving my game. Here’s a rundown of my journey, the challenges I faced, and how I overcame them.</p>

        <p><strong>Getting Started</strong></p>

        <p><strong>Backend Setup</strong></p>
        <p>I started with a Django backend to manage Spotify authentication and playback controls. Key tasks included setting up endpoints for authentication, managing playback state, and retrieving playlists.</p>

        <p><strong>Challenges:</strong></p>
        <ul>
          <li><strong>Environment Variables:</strong> Initially hardcoded client ID and secret, then learned to use environment variables for security.</li>
          <li><strong>Dependencies:</strong> Installing Django, djangorestframework, django-cors-headers, requests, and python-dotenv took some trial and error.</li>
        </ul>

        <p><strong>Authentication Flow</strong></p>
        <p>Set up user redirection to Spotify’s authorization page, handled authorization code exchange for access tokens, and managed refresh tokens for session continuity.</p>

        <p><strong>Building the Frontend</strong></p>
        <p>I used React for the frontend, creating components for playback controls, volume control, rotating logo, login, and currently playing track display.</p>

        <p><strong>Challenges:</strong></p>
        <ul>
          <li><strong>UI/UX Design:</strong> Iterated multiple times for a user-friendly interface.</li>
          <li><strong>State Management:</strong> Ensuring accurate UI reflection of playback state with asynchronous API calls.</li>
        </ul>

        <p><strong>Feature Implementation and Problem-Solving</strong></p>

        <p><strong>Volume Control:</strong></p>
        <p>Initially, the volume slider didn’t reflect Spotify’s current volume. Fixed by fetching the current volume and setting the slider’s default value.</p>

        <p><strong>Play/Pause and Shuffle States:</strong></p>
        <p>Added API calls to fetch the current playback state when the component mounts, ensuring the UI matches the actual state.</p>

        <p><strong>Gradient Background:</strong></p>
        <p>Implemented a random gradient background for visual appeal, changing on each reload.</p>

        <p><strong>Responsive Design:</strong></p>
        <p>Ensured good looks in both portrait and landscape modes on the Raspberry Pi touchscreen, rearranging components based on screen orientation.</p>

        <p><strong>Currently Playing Component:</strong></p>
        <p>Displayed the current track with periodic API calls to Spotify. </p>

        <p><strong>Final Product</strong></p>
        <p>The final Spotify Playback Controller features:</p>
        <ul>
          <li><strong>User Authentication:</strong> Secure Spotify login.</li>
          <li><strong>Playback Controls:</strong> Play, pause, skip, previous, and shuffle tracks.</li>
          <li><strong>Volume Control:</strong> Responsive volume slider.</li>
          <li><strong>Currently Playing:</strong> Displays current track with dynamic background colors.</li>
          <li><strong>Dynamic Background:</strong> Random gradient background changing on each reload.</li>
          <li><strong>Responsive Design:</strong> Adapts to portrait and landscape modes on a Raspberry Pi touchscreen.</li>
        </ul>

        <p><strong>Deployment and Usage</strong></p>
        <p>To make it accessible, I deployed the app on a Raspberry Pi 4:</p>
        <ol>
          <li><strong>Setup the Raspberry Pi:</strong> Installed dependencies and cloned the project repo.</li>
          <li><strong>Configure Environment Variables:</strong> Set Spotify client ID and secret in a each file it is used.</li>
          <li><strong>Run the Backend:</strong> Started the Django server.</li>
          <li><strong>Serve the Frontend:</strong> Built and served the React app.</li>
        </ol>

        <p><strong>Conclusion</strong></p>
        <p>This project was a fun and rewarding experience. It solved my problem and taught me a lot about new technologies. Now, I can enjoy my music without interrupting my game. If you have questions or feedback, feel free to reach out!</p>
      `,
    },
    // Add more blog entries as needed
  ];

  return (
    <div className="container">
      <div className="row align-items-center" style={{ paddingTop: "100px" }}>
        <div className="col-md-12">
          <h1 className={styles.sectionTitle1}>Blog</h1>
          {blogEntries.map((entry, index) => (
            <div
              key={index}
              className="blog-entry"
              style={{ marginBottom: "40px" }}
            >
              <h2 className={styles.sectionTitle2}>{entry.title}</h2>
              <p className={styles.sectionText2}>
                <em>{entry.date}</em>
              </p>
              <div
                className={styles.sectionText2}
                dangerouslySetInnerHTML={{ __html: entry.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
