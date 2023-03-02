import React, { useState } from 'react'
import './App.css';
import Dice from './components/Dice.js'
import Rolls from './components/Rolls';

const App = () =>{
  let diceArray = []
  const [diceNumber,setDiceNumber] = useState(0)
  const diceNumberSetter = () => {
    setDiceNumber(diceArray.push(Math.floor(Math.random(1)*6)))
  //  diceArray.push(diceNumber)
  console.log(diceArray)
  }
  return (
<> <h1> </h1>
    <Dice 
     diceNumber={diceNumber}
     diceNumberSetter={diceNumberSetter}
     />
     <Rolls 
     diceNumber={diceNumber}
     diceArray= {diceArray}
     />
    </>
  )
}
export default App;

