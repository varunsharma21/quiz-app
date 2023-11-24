import React from "react";
import styles from "./WarningModal.module.css";

function WarningModal(props) {
  return (
    <div className={styles.modal}>
      <p>Are you sure you want to submit the test?</p>
      <button>Yes</button>
    </div>
  );
}

export default WarningModal;
