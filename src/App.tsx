// App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectPage from "./pages/ProjectPage";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" ? true : false;
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/portfolio-website" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <DarkModeToggle
        isDarkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
    </BrowserRouter>
  );
}

export default App;
