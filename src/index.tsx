import ReactDOM from "react-dom";
import { DarkModeProvider } from "./hooks/useDarkMode";
import { NotificationsProvider } from "./hooks/useNotify";
import React from "react";
import App from "./App";

ReactDOM.render(
  <DarkModeProvider>
    <NotificationsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NotificationsProvider>
  </DarkModeProvider>,
  document.getElementById("root")
);
