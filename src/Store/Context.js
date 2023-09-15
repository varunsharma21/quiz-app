import { createContext, useState } from "react";

const context = createContext();

export const ContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: "0",
      question: "Where is India located?",
      option1: "Asia",
      option2: "America",
      option3: "Europe",
      option4: "None",
      answer: "Asia",
    },
    {
      id: "1",
      question: "Where is England located?",
      option1: "Asia",
      option2: "America",
      option3: "Europe",
      option4: "None",
      answer: "Europe",
    },
    {
      id: "2",
      question: "Where is Australia located?",
      option1: "Asia",
      option2: "America",
      option3: "Europe",
      option4: "None",
      answer: "None",
    },
  ];

  const savedAnswers = Array.apply(null, Array(questions.length)).map(
    function () {}
  );

  const contextValues = {
    score,
    setScore,
    questions,
    savedAnswers,
  };

  return <context.Provider value={contextValues}>{children}</context.Provider>;
};

export default context;
