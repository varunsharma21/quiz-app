import React from "react";
import styles from "./SignIn.module.css";
import WebAppInfo from "./WebAppInfo";
import SignInForm from "./SignInForm";

function SignIn() {
  return (
    <div className={styles["sign-in"]}>
      <WebAppInfo />
      <SignInForm />
    </div>
  );
}

export default SignIn;
