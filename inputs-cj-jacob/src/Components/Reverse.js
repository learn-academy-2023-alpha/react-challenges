import React from 'react'

function Reverse({script}) {
  
    const changeToReverse = (userInput)=>{
        return userInput.split("").map(element => element).reverse().join("");
        
    } 
  
  
    return (<>
        <h2>Reverse Robot</h2>
        <p>I hear you saying {changeToReverse(script)}, is that correct? </p> 
  </>)
}

export default Reverse