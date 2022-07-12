import ReactDOM from "react-dom";
import { DarkModeProvider } from "./hooks/useDarkMode";
import { NotificationsProvider } from "./hooks/useNotify";
import { PopupProvider } from "./hooks/usePopup";
import React from "react";
import App from "./App";

ReactDOM.render(
  <DarkModeProvider>
    <NotificationsProvider>
      <PopupProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PopupProvider>
    </NotificationsProvider>
  </DarkModeProvider>,
  document.getElementById("root")
);
