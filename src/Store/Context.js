import { useEffect } from "react";
import { createContext, useState } from "react";

const context = createContext();

export const ContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [savedAnswers, setSavedAnswers] = useState(Array(20).fill(null));

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple"
      );

      if (!response.ok) {
        throw Error("Something went wrong :/");
      }

      const data = await response.json();

      const transformedQuestions = data.results.map((question) => {
        return {
          difficulty: question.difficulty,
          category: question.category,
          question: question.question,
          correctAnswer: question.correct_answer,
          incorrectAnswers: question.incorrect_answers,
        };
      });

      setQuestions(transformedQuestions);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // useEffect(() => {
  //   console.log(questions);
  // });

  // const savedAnswers = Array.apply(null, Array(questions.length)).map(
  //   function () {}
  // );

  const contextValues = {
    score,
    setScore,
    questions,
    savedAnswers,
    setSavedAnswers,
  };

  return <context.Provider value={contextValues}>{children}</context.Provider>;
};

export default context;

// const questions = [
//   {
//     id: "0",
//     question: "Where is India located?",
//     option1: "Asia",
//     option2: "America",
//     option3: "Europe",
//     option4: "None",
//     answer: "Asia",
//   },
//   {
//     id: "1",
//     question: "Where is England located?",
//     option1: "Asia",
//     option2: "America",
//     option3: "Europe",
//     option4: "None",
//     answer: "Europe",
//   },
//   {
//     id: "2",
//     question: "Where is Australia located?",
//     option1: "Asia",
//     option2: "America",
//     option3: "Europe",
//     option4: "None",
//     answer: "None",
//   },
//   {
//     id: "3",
//     question: "Where is Australia located?",
//     option1: "Asia",
//     option2: "America",
//     option3: "Europe",
//     option4: "None",
//     answer: "None",
//   },
// ];
