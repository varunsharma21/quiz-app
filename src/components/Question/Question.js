import React, { Fragment, useState } from "react";
import "./Question.css";
import { useContext } from "react";
import context from "../../Store/Context";

//   const savedAnswers = new Array(questions.length);

// making an array of size questions.
// Making it outside component function bcoz,
// array will get re-intiated and become empty everytime component is re-rendered.
// eslint-disable-next-line

// const savedAnswers = Array.apply(null, Array(questions.length)).map(
//   // learn about this syntax and related things.
//   function () {}
// );

const Question = () => {
  const { savedAnswers, questions } = useContext(context);
  const [questionNumber, setQuestionNumer] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);

  // for handling radio button reset on moving to next question.
  const [radioCheckedValue, setRadioCheckedValue] = useState("");

  // const endTestHandler = () => {};

  const nextQuestion = () => {
    setRadioCheckedValue("");
    if (questionNumber < questions.length - 1) {
      setQuestionNumer((prevQuestion) => prevQuestion + 1);
    }
    if (questionNumber === questions.length - 2) {
      setShowNextButton(false);
    }
  };

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setRadioCheckedValue(event.target.value);
    savedAnswers[questionNumber] = event.target.value;
    console.log(savedAnswers);
  };

  return (
    <Fragment>
      <div className="question">
        <p>Q. {questions[questionNumber].question}</p>
      </div>
      <form action="/action_page.php" className="options">
        <div className="option">
          <input
            type="radio"
            id="option-1"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === questions[questionNumber].option1}
            value={questions[questionNumber].option1}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-1">{questions[questionNumber].option1}</label>
        </div>

        <div className="option">
          <input
            type="radio"
            id="option-2"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === questions[questionNumber].option2}
            value={questions[questionNumber].option2}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-2">{questions[questionNumber].option2}</label>
        </div>

        <div className="option">
          <input
            type="radio"
            id="option-3"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === questions[questionNumber].option3}
            value={questions[questionNumber].option3}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-3">{questions[questionNumber].option3}</label>
        </div>

        <div className="option">
          <input
            type="radio"
            id="option-4"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === questions[questionNumber].option4}
            value={questions[questionNumber].option4}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-4">{questions[questionNumber].option4}</label>
        </div>
      </form>

      {/* For hiding 'next' button on last question. */}
      {showNextButton ? (
        <button className="btn__next-question" onClick={nextQuestion}>
          Next
        </button>
      ) : null}
    </Fragment>
  );
};

export default Question;

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
// ];
