import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./hooks/useDarkMode";
import { NotificationsProvider } from "./hooks/useNotify";
import { PopupProvider } from "./hooks/usePopup";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <NotificationsProvider>
          <PopupProvider>
            <App />
          </PopupProvider>
        </NotificationsProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
