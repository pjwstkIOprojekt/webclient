import { createContext, useContext, useState, useEffect } from "react";
import { getCookieValue, setCookieValue } from "../helpers/cookieHelper";

// Handles theme changes for document body
const toggleBodyClasses = (isDark: boolean) => {
  if (isDark) {
    document.body.classList.add("bg-dark", "text-light");
    document.body.classList.remove("bg-light", "text-dark");
  } else {
    document.body.classList.add("bg-light", "text-dark");
    document.body.classList.remove("bg-dark", "text-light");
  }
};

// Default theme settings
const defaultContext = {
  isDark: false,
  toggle: () => {}
};

// Dark mode hooks
const DarkModeContext = createContext(defaultContext);
export const useDarkModeManager = () => useContext(DarkModeContext);
export const useDarkMode = () => useDarkModeManager().isDark;

// Dark mode hook provider component
export const DarkModeProvider = (props: Readonly<JSX.ElementChildrenAttribute>) => {
  const [darkMode, setDarkMode] = useState(getCookieValue("useDarkMode") === "true");

  useEffect(() => {
    setCookieValue("useDarkMode", JSON.stringify(darkMode));
    toggleBodyClasses(darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{
      isDark: darkMode,
      toggle: () => setDarkMode(!darkMode)
    }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
