import React, { useState }  from "react"
import Rolls from './Components/Rolls'
import './App.css'

const App = () => {

  // add main functionality
  // const diceSides = [1, 2, 3, 4, 5, 6]
  const [rollLog, setRollLog] = useState([])
  const diceRoller = () => {
  const array = rollLog
  const randomNumber = Math.ceil(Math.random() * 6)
  setRollLog(array.concat(randomNumber))
    console.log(array)
  }
  return (
<>
<h1> Dice Roller Game </h1>
<div className= "diceBox">
<Rolls 

diceRoller={diceRoller}
/>

</div>
<div className= "List-of-Random"> 
<Rolls/>{rollLog} </div>
</>
  )
  }

export default App
