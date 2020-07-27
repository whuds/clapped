import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { NavBar } from "./Navbar/Navbar.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  rootElement
);
