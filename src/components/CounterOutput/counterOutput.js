import React from "react";

import "../../App.css";

const counterOutput = (props) => {
  return <div className="counterOutput">Current Counter : {props.value}</div>;
};

export default counterOutput;
