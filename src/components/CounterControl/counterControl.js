import React from "react";

import "../../App.css";

export default function counterControl(props) {
  return (
    <div className="counterControl">
      <button onClick={props.click} className="button">
        {props.label}
      </button>
    </div>
  );
}
