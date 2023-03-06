// pseudo code :
// creat a component folder inside our src folder 
// create a file named Boxes.js , 
// const [boxes , setboxes ] = useState("white")

// botton onClick that uses the funtcion of changeColor 
// color and text will be updatd in the useState 

import { useState } from "react";
import React from "react";

    
const Boxes = ()=> {
  
    const [color ,setColor ] = useState("black")
    const [inputBox, setInputBox] = useState([])
    
      const BtnPlaceHolder = ()=> {
        return <button onClick={changeColor} style={{color: color} }>{color}</button>
    }
// console.log(BtnPlaceHolder)
    const addButton = event => {
       setInputBox(inputBox.concat(<BtnPlaceHolder key = {inputBox.length}/>))
    }
 
  

  const changeColor = () => {
 const allColors = ["blue","red","orange","purple","yellow"]
 const array1 = Math.floor(Math.random() * allColors.length)
 return setColor(allColors[array1])  
 
 }
//  console.log(changeColor)

return   ( 
     <>
     <button onClick={addButton} >
         addButton 
     </button>
     {inputBox}
      </>)

}

   
export default Boxes