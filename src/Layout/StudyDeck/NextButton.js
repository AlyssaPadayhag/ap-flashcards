import React from "react";

function NextButton({ NextCardHandler }) {
  return (
    <button type="button" className="btn btn-primary" onClick={NextCardHandler}>
      Next
    </button>
  );
}

export default NextButton;