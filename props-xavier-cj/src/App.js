import React, { useState } from 'react'
import './App.css';
import Dice from './components/Dice.js'
import Rolls from './components/Rolls';
import DiceImages from './components/DiceImages';

const App = () =>{
  const [diceNumber,setDiceNumber] = useState(6)
  const [rolls, setRolls] = useState([])
  const diceNumberSetter = () => {
    setDiceNumber(Math.floor(Math.random() * 6 + 1))
    setRolls(rolls.concat(diceNumber))
  }
  return (
<> <h1> Look at this dice game, it works!</h1>
    <Dice 
     diceNumber={diceNumber}
     diceNumberSetter={diceNumberSetter}
     />
     <Rolls 
     rolls= {rolls}
     />
    </>
  )
}
export default App;

