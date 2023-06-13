import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
