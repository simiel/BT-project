import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EthProvider } from "./context/EthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <EthProvider>
      <App />
    </EthProvider>
  </React.StrictMode>
);
