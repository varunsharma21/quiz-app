import React, { useContext } from "react";
import styles from "./Score.module.css";
import context from "../../Store/Context";
import { Link } from "react-router-dom";

function Score() {
  const { score } = useContext(context);

  return (
    <div className={styles.container}>
      <h1>Your score is {score} / 20.</h1>
      {score < 10 && (
        <>
          <h3>You can do better.</h3>
          <h1>😔</h1>
        </>
      )}
      {score > 10 && score <= 15 && <h3>Great Job!</h3> && (
        <>
          <h3>But still you can do better!</h3>
          <h1>😄</h1>
        </>
      )}
    </div>
  );
}

export default Score;
