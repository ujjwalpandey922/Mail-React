import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MailContextProvider } from "./Context/MailContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MailContextProvider>
    <App />
  </MailContextProvider>
);
