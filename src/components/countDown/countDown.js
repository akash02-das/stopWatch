import React from "react";
import Digit from "./digit/digit";

const CountDown = (props) => {
  return (
    <div className="d-flex justify-content-center my-5">
      <Digit color="palegreen" value={props.time.min} />
      <Digit color="skyblue" value={props.time.sec} />
      <Digit color="salmon" value={props.time.mil} />
    </div>
  );
};

export default CountDown;
