import React from 'react'

function Bad({script}) {
    const changeToBlaBla = (userInput)=>{
        return userInput.split("").map(element => {return "BlaBla"}).join("");
            
        
    } 
    console.log(changeToBlaBla(script))
  return (
   <>
    
    <h2>Bad Robot</h2>
    <p>I hear you saying {changeToBlaBla(script)}, is that correct? </p> 
   
   </> 
  )
}

export default Bad