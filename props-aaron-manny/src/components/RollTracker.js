import React from "react";

const RollTracker = (props) => {
  return (
  <>
  <div className="RollTracker">
    <h2>Previous rolls</h2>
    <button onClick={props.clearLog}>Reset</button>
    <p>{props.myRolls}</p></div>
  </>
)};

export default RollTracker;
