import ReactDOM from "react-dom";
import { DarkModeProvider } from "./hooks/useDarkMode";
import React from "react";
import App from "./App";

ReactDOM.render(
  <DarkModeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DarkModeProvider>,
  document.getElementById("root")
);