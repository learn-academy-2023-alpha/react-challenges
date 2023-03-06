import React from 'react'

function Mah({script}) {
    const changeToTongue = (userInput)=>{
        return userInput.split("").map(element => element+ "👅").join("");
        
    } 
  
  
    return (
    
    <> 

    <h2>Mah Robot</h2>
    <p>I hear you saying {changeToTongue(script)}, is that correct? </p> 
    </>
  )
}

export default Mah





