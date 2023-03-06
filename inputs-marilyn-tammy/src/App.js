import React, { useState } from 'react'
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import Robot from './components/Robot';

const App = () => {
const [textInput, setTextInput] = useState("")

  const handleChange = (e) => {
    setTextInput(e.target.value)
  }

  // Pseudo code for Bad Robot
  // "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
  // input: taking in a string for user input
  // find the length of the string and replace each character with BLA..
  // output: BLABLA... one character for every character user inputs

  return (
    <>
    <h1>Listening Robot</h1>
    <input 
      type="text" 
      onChange={handleChange}
      value={textInput}
    />
    <GoodRobot textInput={textInput}  />
    <BadRobot textInput={textInput} />
    <Robot />
    </>
  )
}

export default App;
