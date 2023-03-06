
import React, { useState } from 'react';
import Robot from './components/Robot'


 const App = () => {
  const [userInput, setUserInput] = useState("")
const handleChange = (e) => {
  setUserInput(e.target.value)

  }
  return (
    <>
    <h1>Hello Robots</h1>
    <h2>Good Robot</h2>
    <div>
    <input
    type="text" onChange = {handleChange} value={userInput}/>
    < Robot userInput={userInput}/>
    </div>
    <h2>Bad Robot</h2>
    <input
    type="text" />
    <h2>Ye Bot</h2>
    <input
    type="text" />
    
    </>
  )
}



export default App