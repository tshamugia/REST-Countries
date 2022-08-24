import React from "react";
import ReactDOM from "react-dom/client";
import "../src/sass/main.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CountryContextProvider } from "./context/CountryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountryContextProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CountryContextProvider>
  </React.StrictMode>
);
