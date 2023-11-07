import React from "react";
import "./Error.css";

const Error = (props) => {
  return (
    <div className="error-modal">
      <div className="error-message">
        <span>{props.status}</span>
        <span>{props.message}</span>
      </div>
    </div>
  );
};

export default Error;
