// ThemeSelector.tsx
import React from "react";
import { useThemeSelector } from "../components/ThemeSelectorContext";

interface ThemeSelectorProps {
  show: boolean;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ show }) => {
  const { changeTheme } = useThemeSelector();

  if (!show) return null;

  return (
    <div
      className="dropdown"
      style={{ position: "fixed", bottom: "20px", left: "20px" }}
    >
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="themeDropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select Theme
      </button>
      <div className="dropdown-menu" aria-labelledby="themeDropdown">
        <button
          className="dropdown-item"
          onClick={() => changeTheme("default")}
        >
          Light Mode
        </button>
        <button
          className="dropdown-item"
          onClick={() => changeTheme("body-dark-mode")}
        >
          Dark Mode
        </button>
        <button
          className="dropdown-item"
          onClick={() => changeTheme("body-angel")}
        >
          Angel
        </button>
        <button
          className="dropdown-item"
          onClick={() => changeTheme("body-azi")}
        >
          Azi
        </button>
        <button
          className="dropdown-item"
          onClick={() => changeTheme("body-euan")}
        >
          Euan
        </button>
        <button
          className="dropdown-item"
          onClick={() => changeTheme("body-isaiah")}
        >
          Isaiah
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
