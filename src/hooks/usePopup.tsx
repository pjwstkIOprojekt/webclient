import { createContext, useContext, useState, useEffect } from "react";
import { useDarkMode } from "./useDarkMode";
import { useLocation } from "react-router-dom";

// Default popup settings
const defaultContext = {
  update: (el: JSX.Element) => {}
};

// Popup hooks
const PopupContext = createContext(defaultContext);
export const usePopup = () => useContext(PopupContext).update;

// Popup hook provider component
export const PopupProvider = (props: Readonly<JSX.ElementChildrenAttribute>) => {
  const [popup, setPopup] = useState<JSX.Element | null>(null);
  const darkMode = useDarkMode();
  const location = useLocation();
  useEffect(() => setPopup(null), [location]);

  return (
    <PopupContext.Provider value={{
      update: el => setPopup(el)
    }}>
      {popup ? (
        <>
          <div className={`popup-container popup-${darkMode ? "dark" : "light"}`}>{popup}</div>
          <div className="popup-cover" onClick={() => setPopup(null)} />
        </>
      ) : ""}
      {props.children}
    </PopupContext.Provider>
  );
};
