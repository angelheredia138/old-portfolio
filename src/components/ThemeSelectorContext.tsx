// ThemeSelectorContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeSelectorContextProps {
  showThemeSelector: boolean;
  setShowThemeSelector: (show: boolean) => void;
  changeTheme: (theme: string) => void;
}

interface ThemeSelectorProviderProps {
  children: ReactNode;
}

const ThemeSelectorContext = createContext<ThemeSelectorContextProps>({
  showThemeSelector: false,
  setShowThemeSelector: () => {},
  changeTheme: () => {},
});

export const ThemeSelectorProvider: React.FC<ThemeSelectorProviderProps> = ({
  children,
}) => {
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const changeTheme = (theme: string) => {
    document.body.className = ""; // Reset any existing theme classes
    if (theme !== "default") {
      document.body.classList.add(theme);
    }
    localStorage.setItem("selectedTheme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "default";
    changeTheme(savedTheme);

    const themeSelectorShown =
      sessionStorage.getItem("themeSelectorShown") === "true";
    setShowThemeSelector(themeSelectorShown);
  }, []);

  return (
    <ThemeSelectorContext.Provider
      value={{ showThemeSelector, setShowThemeSelector, changeTheme }}
    >
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export const useThemeSelector = () => useContext(ThemeSelectorContext);
