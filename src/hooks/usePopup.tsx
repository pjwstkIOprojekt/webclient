import { createContext, useContext, useState } from "react";

// Default popup settings
const defaultContext: PopupContext = {
  update: (el: JSX.Element) => { },
  clear: () => {},
  popup: undefined
};

// Popup hooks
const PopupContext = createContext(defaultContext);
export const usePopupManager = () => useContext(PopupContext);
export const usePopup = () => usePopupManager().update;

// Helper types for popup hooks
interface PopupContext {
  update: (el: JSX.Element) => void,
  clear: () => void,
  popup?: JSX.Element
}

// Popup hook provider component
export const PopupProvider = (props: Readonly<JSX.ElementChildrenAttribute>) => {
  const [popup, setPopup] = useState<JSX.Element | null>(null);

  return (
    <PopupContext.Provider value={{update: el => setPopup(el), clear: () => setPopup(null), popup: popup ? popup : undefined}}>
      {props.children}
    </PopupContext.Provider>
  );
};
