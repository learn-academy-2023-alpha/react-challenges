// User Stories
// As a user, I can see a square box on the screen with a black border and a white background.
// As a user, I can click on the box to roll the dice and see the result of my roll in the box.
// As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.
// 🏔 Stretch Goals
// As a user, I can see the image of a dice face when I roll the dice.
// As a user, I can click a restart button that clears my roll log.import React from "react"

import { useState } from "react";
import './App.css';
import Dice from "./Component/Dice"

function App() {
// This is the state we used for all of the random numbers generated
  const [number, setNumber]= useState([])
  const [image, setImage]= useState([])

// This is the function that generates a random number and logs it within our state; it matches the random number generated to match the index of the image array
  const RandomNumberGen = () => {
    const imageArray = ["https://raw.githubusercontent.com/learn-academy-2023-alpha/Syllabus/main/react/assets/1-dice.png",
  "https://raw.githubusercontent.com/learn-academy-2023-alpha/Syllabus/main/react/assets/2-dice.png",
  "https://raw.githubusercontent.com/learn-academy-2023-alpha/Syllabus/main/react/assets/3-dice.png",
  "https://raw.githubusercontent.com/learn-academy-2023-alpha/Syllabus/main/react/assets/4-dice.png",
  "https://raw.githubusercontent.com/learn-academy-2023-alpha/Syllabus/main/react/assets/5-dice.png",
  "https://raw.githubusercontent.com/learn-academy-2023-alpha/Syllabus/main/react/assets/6-dice.png"]
    const rolledArray = number
    const indexedImage = []
    //creating a random number from 1-6
   const randomNum = Math.ceil(Math.random() * 6)
   //pushing the random number into the rolledArray
   setNumber(rolledArray.concat(randomNum))
   // call $ setImage to update our state of image; we are throwing in that specific image index to our image array
   setImage(indexedImage.concat(imageArray[randomNum -1]))
   console.log(rolledArray)
  }
  // This is is built in page refresh in React
  const refreshPage =()=> { 
    window.location.reload(false);
  }
   


  return (
    <>
    <h1>Dice Roller Challenge</h1>
    <div className="app">
      <div className="dice">
        <div className="dice-roller" onClick ={RandomNumberGen}>
         {image.map((image, index)=>{
          return <Dice key={index} />
          })}
          <img src= {image} alt="Image" height="85px" width="85px"></img>
        </div> 
        <h5>Click Box to Roll</h5>
      </div>
    </div>
    <div className="all-rolls">
      {number.map((number, index)=> {
        return <Dice key={index} num = {number}/>
      })}
    </div>
      <button onClick={refreshPage}>Click to reload!</button>
    </>
  );
}

export default App;