import React, {useState} from 'react';
import './App.css';
import Applebot from './Components/Applebot';
import Badrobot from './Components/Badrobot';

import Goodrobot from './Components/Goodrobot';


const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleChange = (e) => {
    setUserInput (e.target.value)
  }
  return (
    <>
    <h1> Robo Active Listening </h1>
    <input type="text" onChange={handleChange} value={userInput} />
   <Goodrobot userInput = {userInput}/> 
   <Badrobot userInput = {userInput}/>
   <Applebot userInput = {userInput}/>

    </>
  )
}


export default App;

{/* <input type="text"></input> */}