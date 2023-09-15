import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// // eslint-disable-next-line
// const savedAnswers = Array.apply(null, Array(questions.length)).map(
//   // learn about this syntax and related things.
//   function () {}
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
