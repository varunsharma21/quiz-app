import React, { Fragment, useState, useContext, useEffect, memo } from "react";
import styles from "./Question.module.css";
import context from "../../Store/Context";
import parse from "html-react-parser";

const Question = () => {
  const { savedAnswers, questions, isLoading, category } = useContext(context);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);
  const [options, setOptions] = useState([]);

  // for handling radio button reset on moving to next question.
  const [radioCheckedValue, setRadioCheckedValue] = useState("");

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

  // For running this once when a question loads for the first time.
  // Picks a random index to insert correct answer.
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
      <div className={styles.question}>
        <p>
          Q.{questionNumber + 1} {parse(questions[questionNumber].question)}
        </p>
        <p>Hint:- {String(parse(questions[questionNumber].category))}</p>
      </div>
      <form action="/action_page.php" className={styles.options}>
        <div className={styles.option}>
          <input
            type="radio"
            id="option-1"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === parse(String(options[0]))}
            value={parse(String(options[0]))}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-1">{parse(String(options[0]))}</label>
        </div>

        <div className={styles.option}>
          <input
            type="radio"
            id="option-2"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === parse(String(options[1]))}
            value={parse(String(options[1]))}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-2">{parse(String(options[1]))}</label>
        </div>

        <div className={styles.option}>
          <input
            type="radio"
            id="option-3"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === parse(String(options[2]))}
            value={parse(String(options[2]))}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-3">{parse(String(options[2]))}</label>
        </div>

        <div className={styles.option}>
          <input
            type="radio"
            id="option-4"
            name="option"
            // for handling radio button reset on moving to next question.
            checked={radioCheckedValue === options[3]}
            value={parse(String(options[3]))}
            onChange={onChangeHandler}
          />
          <label htmlFor="option-4">{parse(String(options[3]))}</label>
        </div>
      </form>

      {/* For hiding 'next' button on last question. */}
      {showNextButton ? (
        <button className={styles["btn__next-question"]} onClick={nextQuestion}>
          Next
        </button>
      ) : null}
    </Fragment>
  );
};

export default memo(Question);

// <div className={styles.option}>
//           <input
//             type="radio"
//             id="option-2"
//             name="option"
//             // for handling radio button reset on moving to next question.
//             checked={radioCheckedValue === parse(options[1])}
//             value={parse(options[1])}
//             onChange={onChangeHandler}
//           />
//           <label htmlFor="option-2">{parse(options[1])}</label>
//         </div>

//         <div className={styles.option}>
//           <input
//             type="radio"
//             id="option-3"
//             name="option"
//             // for handling radio button reset on moving to next question.
//             checked={radioCheckedValue === parse(options[2])}
//             value={parse(options[2])}
//             onChange={onChangeHandler}
//           />
//           <label htmlFor="option-3">{parse(options[2])}</label>
//         </div>

//         <div className={styles.option}>
//           <input
//             type="radio"
//             id="option-4"
//             name="option"
//             // for handling radio button reset on moving to next question.
//             checked={radioCheckedValue === parse(options[3])}
//             value={parse(options[3])}
//             onChange={onChangeHandler}
//           />
//           <label htmlFor="option-4">{parse(options[3])}</label>
//         </div>
