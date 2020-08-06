import React from "react";

const validation = (props) => {
  let validationMessage = "text too large";
  if (props.inputLength <= 5) {
    validationMessage = "text too short";
  }

  return (
    <div>
      <p>paragraph inside validation component</p>
      {validationMessage}
    </div>
  );
};

export default validation;
