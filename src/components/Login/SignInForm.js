import React from "react";
import styles from "./SignInForm.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import context from "../../Store/Context";

function SignInForm() {
  const {
    score,
    setScore,
    questions,
    savedAnswers,
    setSavedAnswers,
    fetchQuestions,
    isLoading,
  } = useContext(context);

  const resetQuiz = async () => {
    setScore(0);
    setSavedAnswers(Array(20).fill(null));
  };

  return (
    <div className={styles.form}>
      <div className={styles["other-sign-in-options"]}>
        <h1>Sign In</h1>
        <p>Sign in to your account.</p>
        <div className={styles["sign-in-buttons"]}>
          <Link to="quiz">
            <button>Sign In with Google</button>
          </Link>
          <Link to="quiz">
            <button>Sign in as Guest</button>
          </Link>
        </div>
      </div>

      <div className={styles["manual-form"]}>
        <hr></hr>
        <p>Email address</p>
        <input type="email"></input>
        <p>Password</p>
        <input type="password" />
        <p className={styles["forgot-password"]}>Forgot Password?</p>
        <button>Sign In</button>
        <p>Don't have an account? Register here</p>
      </div>
    </div>
  );
}

export default SignInForm;
