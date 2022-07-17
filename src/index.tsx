import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./hooks/useDarkMode";
import { NotificationsProvider } from "./hooks/useNotify";
import { PopupProvider } from "./hooks/usePopup";
import React from "react";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <DarkModeProvider>
      <NotificationsProvider>
        <PopupProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PopupProvider>
      </NotificationsProvider>
    </DarkModeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
