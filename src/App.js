import React from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login.jsx";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import { ContextProvider } from "./Store/Context"; // Correct import
import SignIn from "./components/Login/SignIn.js";

function App() {
  return (
    <div>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz/result" element={<Result />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
