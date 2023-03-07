import React, { useState } from "react";
import "./App.css";
import DiceBox from "./components/DiceBox";
import RollTracker from "./components/RollTracker";
import oneImage from "./assets/1-dice.png"
import twoImage from "./assets/2-dice.png"
import threeImage from "./assets/3-dice.png"
import fourImage from "./assets/4-dice.png"
import fiveImage from "./assets/5-dice.png"
import sixImage from "./assets/6-dice.png"

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
// Create an array of myRolls, logs result of roll to the array
// 
// 🏔 Stretch Goals
// As a user, I can see the image of a dice face when I roll the dice.
// As a user, I can click a restart button that clears my roll log.

// const rollTheDice = () => {
//   return setDiceRoll(5);
// };

const App = () => {
  const [myRolls, setmyRolls] = useState([])
  const [diceImage,setdiceImage] = useState(oneImage)
  const images = [oneImage,twoImage,threeImage,fourImage,fiveImage,sixImage]
  const clearLog = () => {
    setmyRolls([])
  }
     
  
    const [diceRoll, setDiceRoll] = useState(1);
    const rollDice = () => {
       setDiceRoll(Math.round(Math.random() * 5) + 1);
       myRolls.push(`${diceRoll} `)
      return setdiceImage(images[diceRoll - 1])
   }
  return (
    <>
      <div className="boxHolder">
        <div onClick={rollDice}><DiceBox diceImage={diceImage} diceRoll={diceRoll} rollDice={rollDice} /></div>
        <RollTracker myRolls={myRolls} clearLog={clearLog}  />
      </div>
    </>
  );
};

export default App;
