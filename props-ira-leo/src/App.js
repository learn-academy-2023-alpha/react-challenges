import React, { useState } from "react";
import "./App.css"
import Dice from "./Components/Dice";
import Roller from "./Components/Roller";
 
const App = () => {
  const [rolls, setRolls]= useState(3)
    const nums = [1,2,3,4,5,6]
    const rollNum = () =>{
       let rolling = Math.floor(Math.random() * nums.length)
       setRolls(rolling+1)}
    // const addLog = rollNum.map((number)=>
    //    <li>{number}</li>)
     
    
      
        // setRolls(rollNum)
     
  
      
  

  return (
       <>
        <h1>Dice Roller </h1>
        <div className="dice"> 
           The Dice
           <br></br>

          <button  className="diceMini" onClick={rollNum}> 
          
          {rolls}

          
          </button>
         
        </div>
        <div className="rollLog">  
        Roll Log 
        <br></br>
         <h1> Previous Rolls</h1>
        </div>
        <div>
          {/* <ul>{addLog}</ul> */}
          

        </div>
        <Dice/>
        <Roller/>
         
       
    
    
       </>
  )
}




export default App