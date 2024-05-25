// App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectPage from "./pages/ProjectPage";
import DarkModeToggle from "./components/DarkModeToggle";
import ThemeSelector from "./components/ThemeSelector";
import {
  ThemeSelectorProvider,
  useThemeSelector,
} from "./components/ThemeSelectorContext";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    return savedTheme === "body-dark-mode";
  });

  const changeTheme = (theme: string) => {
    document.body.className = ""; // Reset any existing theme classes
    if (theme !== "default") {
      document.body.classList.add(theme);
    }
    localStorage.setItem("selectedTheme", theme);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    const theme = newMode ? "body-dark-mode" : "default";
    changeTheme(theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "default";
    changeTheme(savedTheme);
  }, []);

  return (
    <ThemeSelectorProvider>
      <BrowserRouter basename="/portfolio-website">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <ThemeSelectorWrapper />
      </BrowserRouter>
    </ThemeSelectorProvider>
  );
};

const ThemeSelectorWrapper: React.FC = () => {
  const { showThemeSelector } = useThemeSelector();
  return <ThemeSelector show={showThemeSelector} />;
};

export default App;
