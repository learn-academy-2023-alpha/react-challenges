import React from "react";

const Dice =(props)=> {
    return (
        <div className='dice'>
       <p onClick = {props.diceNumberSetter} >
       {props.diceNumber}   
        </p>
        </div>
    )
}
export default Dice