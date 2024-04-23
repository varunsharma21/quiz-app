import React from "react";
import styles from "./SignInForm.module.css";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();
    navigate("/quiz");
  };

  return (
    <div className={styles.form}>
      <div className={styles["other-sign-in-options"]}>
        <h1>Fill the form</h1>
      </div>

      <div className={styles["manual-form"]}>
        <form onSubmit={submitFormHandler}>
          <label>Email address</label>
          <input type="email" required="true" />

          <label>Full Name</label>
          <input type="text" required="true" />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
