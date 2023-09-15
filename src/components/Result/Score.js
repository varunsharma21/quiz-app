import React, { useContext, useEffect } from "react";
import context from "../../Store/Context";

function Score() {
  const { score } = useContext(context);

  return (
    <div>
      <h1>Your score is {score}.</h1>
    </div>
  );
}

export default Score;
