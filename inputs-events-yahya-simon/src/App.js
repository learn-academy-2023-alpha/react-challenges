import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Jack from './components/Jack';

function App() {
const [userInput, setUserInput] = useState("")
// const [userInputBad, setUserInputBad] = useState("")
// BLA.repeat(Math.ceil(userInput.length / 3))


  const handleChange = (e) => {
  console.log(e.target.value)
  setUserInput(e.target.value)
  // setUserInputBad(e.target.value)
}
const badRobotResponse = (inputValue) => {
  const pattern = "BLAH";
  let response = "";
  for (let i = 0; i < inputValue.length; i++) {
    response += pattern.charAt(i % pattern.length);
  }
  return response;
};
const bustedRobotResponse = (inputValue) => {
  const pattern = {Jack};
  let response = "";
  for (let i = 0; i < inputValue.length; i++) {
    response += pattern.charAt(i % pattern.length);
  }
  return response;
};

// const handleChangeBad = (e) => {
//   setUserInputBad(e.target.value)
// }


  return (
    <>
    <h1>Landing page</h1>
    <input type="text" value={userInput} onChange={handleChange}/>
    <h2>Good Robot</h2>
    <p>I hear you saying {userInput}. Is that correct?</p>
    <br></br>
    <h2>Bad Robot</h2>
    <p>I hear you saying {badRobotResponse(userInput)}. Is that correct?</p>
    <br></br>
    <h2>Busted Robot</h2>
    <p>{bustedRobotResponse(userInput)}</p>
    </>
  );
}

export default App;
