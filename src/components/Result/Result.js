import React, { Fragment } from "react";
import Score from "./Score";
import styles from "./Result.module.css";

function Result() {
  return (
    <div className={styles.container}>
      <Score />
    </div>
  );
}

export default Result;
