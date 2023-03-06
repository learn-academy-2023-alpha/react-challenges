import React, { useState } from 'react';
import "./App.css";
import DiceUI from './components/DiceUI';
import RollLog from './components/RollLog';


const App = () => {
const [currentRoll, setCurrentRoll] = useState("")
const [currentLog, setCurrentLog] = useState([])
const triggerNextRoll = () => {
  let diceRoll = Math.floor(Math.random() * 6) + 1
  setCurrentRoll(diceRoll)
  let logArray = currentLog
  logArray.push(currentRoll)
  setCurrentLog(logArray)
}
const clearLog = () => {
  setCurrentLog([])
  setCurrentRoll("")
}
  return (
    <>
      <h1 className='title'>Dice Roller Challenge</h1>
      <div className='dice-box-display'>
        <DiceUI currentRoll={currentRoll} triggerNextRoll={triggerNextRoll}/>
        <RollLog currentLog={currentLog}/>
      </div>
      <div className="button">
            <button onClick={clearLog}>Restart</button>
      </div>
    </>
  )
}



export default App;
