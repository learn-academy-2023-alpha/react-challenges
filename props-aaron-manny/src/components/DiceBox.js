import React, { useState } from "react";

const DiceBox = () => {
  const [diceRoll, setDiceRoll] = useState(1);
  const rollDice = () => {
    return setDiceRoll(Math.round(Math.random() * 5) + 1);
  };
  return (
    <div className="diceBox" onClick={rollDice}>
      Roll: {diceRoll}
    </div>
  );
};

export default DiceBox;
