import React from "react";
import styles from "./page assets/Pages.module.css";

const BlogPage: React.FC = () => {
  const blogEntries = [
    {
      date: "August 3, 2024",
      title:
        "Creating a Spotify Data Visualization: A Journey Through Django and D3.js",
      content: `
        <p><strong>Introduction</strong></p>
        <p>As a music enthusiast and a data geek, I wanted to combine my interests and create a project that visualizes my Spotify listening habits. This project, a Spotify Data Visualization, was my first experience using Django in a production environment and hosting a backend using Amazon ECS. Here’s a detailed account of my journey, the challenges I faced, and the solutions I implemented.</p>

        <p><strong>Getting Started</strong></p>
        <p>I began by setting up a Django backend to handle data retrieval from the Spotify API. This included setting up endpoints to fetch data such as top artists, top tracks, and listening history. The backend also handled user authentication and data storage.</p>

        <p><strong>Backend Setup</strong></p>
        <p>Key tasks included:</p>
        <ul>
          <li>Setting up Django and necessary dependencies like djangorestframework and django-cors-headers.</li>
          <li>Creating models to store Spotify data.</li>
          <li>Implementing API views to handle data requests.</li>
          <li>Using Celery for asynchronous tasks like fetching and updating data periodically.</li>
        </ul>

        <p><strong>Challenges:</strong></p>
        <ul>
          <li><strong>Environment Variables:</strong> Managing sensitive data like Spotify API keys securely using environment variables.</li>
          <li><strong>Data Fetching:</strong> Ensuring efficient and reliable data fetching from Spotify’s API.</li>
        </ul>

        <p><strong>Building the Frontend</strong></p>
        <p>The frontend was built using React and Vite. I used D3.js for creating interactive and dynamic data visualizations. The frontend displayed various charts such as bar charts, scatter plots, and radar charts, providing insights into listening habits.</p>

        <p><strong>Challenges:</strong></p>
        <ul>
          <li><strong>Integration with Backend:</strong> Ensuring seamless data flow between the frontend and backend.</li>
          <li><strong>D3.js Complexity:</strong> Learning and implementing D3.js for complex data visualizations.</li>
        </ul>

        <p><strong>Feature Implementation</strong></p>
        <ul>
          <li><strong>Spotify Wrapped-Style Presentation:</strong> Created a scrolling feature for navigating through different visualizations.</li>
          <li><strong>Interactive Charts:</strong> Implemented various interactive charts to display top artists, top tracks, and listening history.</li>
          <li><strong>Responsive Design:</strong> Ensured the visualizations looked great on all devices.</li>
        </ul>

        <p><strong>Deployment and Hosting</strong></p>
        <p>For the backend, I chose Amazon ECS to ensure a robust and scalable deployment. This was my first experience using Django in a production environment, and ECS provided the necessary infrastructure to handle the backend operations smoothly.</p>

        <p><strong>Final Product</strong></p>
        <p>The final product features:</p>
        <ul>
          <li><strong>User Authentication:</strong> Secure login via Spotify.</li>
          <li><strong>Data Visualizations:</strong> Various charts providing insights into listening habits.</li>
          <li><strong>Interactive UI:</strong> User-friendly and interactive interface built with React and D3.js.</li>
          <li><strong>Scalable Backend:</strong> Robust backend setup using Django and hosted on Amazon ECS.</li>
        </ul>

        <p><strong>Conclusion</strong></p>
        <p>This project was a significant learning experience, from using Django in production to creating complex visualizations with D3.js. It combined my love for music and data, resulting in a tool that provides valuable insights into my listening habits. If you have any questions or feedback, feel free to reach out!</p>
      `,
    },
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

  // Sort blog entries by date from most recent to least recent
  blogEntries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
