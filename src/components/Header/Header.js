import React, { useContext, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import context from "../../Store/Context";

function Header() {
  const { savedAnswers, questions, score, setScore } = useContext(context);

  const calculateScore = () => {
    let updatedScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correctAnswer === savedAnswers[i]) {
        updatedScore++;
      }
    }
    setScore(updatedScore);
    // console.log("Working!", score, updatedScore);
  };

  useEffect(() => {
    console.log("Score updated:", score);
  }, [score]);

  // const calculateScore = () => {
  //   for (let i = 0; i < questions.length; i++) {
  //     if (questions[i].answer === savedAnswers[i]) {
  //       console.log("hi");
  //       setScore((prev) => prev + 1);
  //     }
  //   }
  //   console.log("Working baby!", score);
  // };

  return (
    <div className={styles.header}>
      <h2>App name</h2>
      <Link to="result">
        <button className={styles["btn__end-test"]} onClick={calculateScore}>
          End Test
        </button>
      </Link>
    </div>
  );
}

export default Header;
