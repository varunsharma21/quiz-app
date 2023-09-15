import React from "react";
import "./WarningModal.css";

function WarningModal(props) {
  const {} = props;
  return (
    <div className="modal">
      <p>Are you sure you want to submit the test?</p>
      <button>Yes</button>
    </div>
  );
}

export default WarningModal;
