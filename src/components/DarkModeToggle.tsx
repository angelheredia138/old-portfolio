// DarkModeToggle.tsx
import React from "react";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        cursor: "pointer",
        borderRadius: "50%",
        padding: "10px 15px",
        backgroundColor: isDarkMode ? "#FFF" : "#333",
        color: isDarkMode ? "#333" : "#FFF",
        border: "none",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        fontSize: "24px",
      }}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? "🌞" : "🌜"}
    </button>
  );
};

export default DarkModeToggle;
