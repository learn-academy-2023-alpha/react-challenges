import React, { useState } from "react";

const DiceBox = (props) => {


  // const [diceRoll, setDiceRoll] = useState(1);
  // const rollDice = () => {
  //   return setDiceRoll(Math.round(Math.random() * 5) + 1);
  
  return  (
    <div className="diceBox" >
      <img height ="100px" width="100px"src={props.diceImage}></img>
      <p>Click to roll</p>
      
    </div>
  );
};

export default DiceBox;
