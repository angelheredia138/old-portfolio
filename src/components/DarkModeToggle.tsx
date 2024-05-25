// DarkModeToggle.tsx
import React, { useEffect, useState } from "react";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
  const [mode, setMode] = useState(isDarkMode);

  useEffect(() => {
    setMode(isDarkMode);
  }, [isDarkMode]);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        cursor: "pointer",
        borderRadius: "50%",
        padding: "10px 15px",
        backgroundColor: mode ? "#FFF" : "#333",
        color: mode ? "#333" : "#FFF",
        border: "none",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        fontSize: "24px",
      }}
      aria-label="Toggle dark mode"
    >
      {mode ? "🌞" : "🌜"}
    </button>
  );
};

export default DarkModeToggle;
