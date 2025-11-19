import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PasswordProtection from "./components/PasswordProtection";
import "./index.css";
import "@xyflow/react/dist/style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PasswordProtection>
      <App />
    </PasswordProtection>
  </React.StrictMode>
);
