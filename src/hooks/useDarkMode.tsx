import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";

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

// Helper types for dark mode hooks
interface DarkModeState {
  isDark: boolean,
  hasDarkModeMounted: boolean
}

type DarkModeHookResult = [value: DarkModeState, setter: Dispatch<SetStateAction<DarkModeState>>];

// Loads initial theme
const useEffectDarkMode = (): DarkModeHookResult => {
  const [darkMode, setDarkMode] = useState({
    isDark: false,
    hasDarkModeMounted: false
  });

  useEffect(() => {
    const localIsDark = localStorage.getItem("useDarkMode") === "true";
    toggleBodyClasses(localIsDark);

    setDarkMode({
      isDark: localIsDark,
      hasDarkModeMounted: true
    });
  }, []);

  return [darkMode, setDarkMode];
};

// Dark mode hook provider component
export const DarkModeProvider = (props: JSX.ElementChildrenAttribute) => {
  const [darkMode, setDarkMode] = useEffectDarkMode();

  if (!darkMode.hasDarkModeMounted) {
    return <></>;
  }

  const toggle = () => {
    const dark = !darkMode.isDark;
    localStorage.setItem("useDarkMode", JSON.stringify(dark));
    toggleBodyClasses(dark);

    setDarkMode({
      isDark: dark,
      hasDarkModeMounted: darkMode.hasDarkModeMounted
    });
  };

  return (
    <DarkModeContext.Provider value={{
      isDark: darkMode.isDark,
      toggle: toggle
    }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
