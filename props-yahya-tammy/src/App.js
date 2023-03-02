import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Dice from './Components/Dice';
import Roll from './Components/Roll-Log';

function App() {
  const [diceStart, setDiceStart] = useState([])
  const [rollUpdate, setRollUpdate] = useState([])

  const diceNumbers = [1, 2, 3, 4, 5, 6]
  
  const rollDice = () => {
    var d1 = Math.floor(Math.random() * diceNumbers.length)
    setDiceStart(diceNumbers[d1])
    setRollUpdate(rollUpdate.concat(diceStart))
    console.log(rollUpdate)
  }

  const [diceImages, setDiceImages] = useState([])
  const diceImage = (diceStart) => {
    if(diceStart === 1){
      return setDiceImages(<div className = "img1"></div>);
     } else if(diceStart === 2){
      return setDiceImages(<div className = "img2"></div>);
     } else if(diceStart === 3){
      return setDiceImages(<div className = "img3"></div>);
     } else if (diceStart === 4) {
     return setDiceImages(<div className = "img4"></div>);
     } else if (diceStart === 5){
      return setDiceImages(<div className = "img5"></div>);
     } else if (diceStart === 6) {
      return setDiceImages(<div className = "img6"></div>);
     } else {
      return <div className="dice ">!!!</div>;
     }
   }


  return (
    <>
    <div>
      <Dice diceNumbers = {diceStart} rollDice = {rollDice} diceImages = {diceImages}/>
      <h2>Roll Log</h2>
    </div>
    <Roll rollDice = {rollDice} diceNumbers = {diceStart} rollUpdate = {rollUpdate}/>
    </>
  );
}

export default App;