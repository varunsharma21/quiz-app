import React, { Fragment, useState, useContext, useEffect, memo } from "react";
import "./Question.css";
import context from "../../Store/Context";
import parse from "html-react-parser";

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
  const { savedAnswers, questions, isLoading } = useContext(context);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);
  const [options, setOptions] = useState([]);

  // for handling radio button reset on moving to next question.
  const [radioCheckedValue, setRadioCheckedValue] = useState("");

  // const endTestHandler = () => {};

  const nextQuestion = () => {
    setRadioCheckedValue("");
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prevQuestion) => prevQuestion + 1);
    }
    if (questionNumber === questions.length - 2) {
      setShowNextButton(false);
    }
  };

  const onChangeHandler = (event) => {
    // console.log(event.target.value);
    setRadioCheckedValue(event.target.value);
    savedAnswers[questionNumber] = event.target.value;
    console.log(savedAnswers);
  };

  // make this function st it randoms the options.
  // console.log(questions[questionNumber].incorrectAnswers);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 4);
    console.log(randomIndex);
    const updatedOptions = [...questions[questionNumber].incorrectAnswers];
    updatedOptions.splice(
      randomIndex,
      0,
      questions[questionNumber].correctAnswer
    );
    setOptions(updatedOptions);
    // console.log(options);
  }, [questionNumber, questions]);

  return (
    <Fragment>
      {/* {options()} */}
      <div className="question">
        <p>
          Q.{questionNumber + 1} {parse(questions[questionNumber].question)}
        </p>
      </div>
      <form action="/action_page.php" className="options">
        <div className="option">
          <input
            type="radio"
            id="option-1"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === options[0]}
            value={options[0]}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-1">{options[0]}</label>
        </div>

        <div className="option">
          <input
            type="radio"
            id="option-2"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === options[1]}
            value={options[1]}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-2">{options[1]}</label>
        </div>

        <div className="option">
          <input
            type="radio"
            id="option-3"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === options[2]}
            value={options[2]}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-3">{options[2]}</label>
        </div>

        <div className="option">
          <input
            type="radio"
            id="option-4"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === options[3]}
            value={options[3]}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-4">{options[3]}</label>
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

export default memo(Question);
