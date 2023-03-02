import React, { useState } from "react";
import "./App.css";
import DiceBox from "./components/DiceBox";
import RollTracker from "./components/RollTracker";

// 📚 User Stories
// As a user, I can see a square box on the screen with a black border and a white background.
// PC: <div className="diceBox"><>
// As a user, I can click on the box to roll the dice and see the result of my roll in the box.
//need an onclick to run a fucntion to output a random number from 1-6 and set it to state
// Math.random() * 6 - should give a random number between 1-6
// setDiceRoll()
//need a use state to manage the number and display it
//

// As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.
// Create an array of

// 🏔 Stretch Goals
// As a user, I can see the image of a dice face when I roll the dice.
// As a user, I can click a restart button that clears my roll log.

// const rollTheDice = () => {
//   return setDiceRoll(5);
// };

const App = () => {
  return (
    <>
      <div className="boxHolder">
        <DiceBox />
        <RollTracker />
      </div>
    </>
  );
};

export default App;
