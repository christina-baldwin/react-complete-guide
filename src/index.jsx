import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// if not using jsx
// import React from "react";
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
