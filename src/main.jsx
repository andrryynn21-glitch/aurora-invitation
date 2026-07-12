import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";

import App from "./App.jsx";

AOS.init({
  duration: 1200,

  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
