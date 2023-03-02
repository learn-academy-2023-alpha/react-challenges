import React, { useState }  from "react"
import Rolls from './Components/Rolls'
import './App.css'

const App = () => {

  // add main functionality
  const diceSides = [1, 2, 3, 4, 5, 6]
  const [rollLog, setRollLog] = useState()
  const diceRoller = () => {
      setRollLog(diceSides[Math.floor(Math.random() * diceSides.length)])
      return rollLog
  }
  return (
<>
<h1> Dice Roller Game </h1>
<div className= "diceBox">
<Rolls 
rollLog={rollLog}
diceRoller={diceRoller}
/>
</div>
<Rolls />
</>
  )
}
export default App
