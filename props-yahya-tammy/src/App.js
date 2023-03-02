import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Dice from './Components/Dice';
import Roll from './Components/Roll-Log';

function App() {
  const diceNumbers = [1, 2, 3, 4, 5, 6]
  const [diceStart, setDiceStart] = useState(diceNumbers[0])
  
  const rollDice = () => {
    // console.log(diceNumbers[Math.floor(Math.random() * diceNumbers.length)])
    setDiceStart(diceNumbers[Math.floor(Math.random() * diceNumbers.length)])
  }
  const [rollUpdate, setRollUpdate] = useState(setDiceStart)
  const rollLog = () => {
    if (rollUpdate > 1){
      setRollUpdate(rollUpdate)
    }
    // setRollUpdate(rollUpdate)
  }
  return (
    <>
    <div>
      <Dice diceNumbers = {diceStart} rollDice = {rollDice} />
      <h2>Roll Log</h2>
    </div>
    <Roll rollDice = {rollDice} diceNumbers = {diceStart} rollLog = {rollLog}/>
    {/* {diceNumbers.map((dice) => {
return <Roll roll = {dice} />
})} */}
    </>
  );
}

export default App;
// {diceNumbers.map((dice) => {
//   return <Dice roll = {dice} />
// })}