import React, {useState} from 'react'
import Die from './Die'

const Dice = (props) => {

    // const passRoll = () => {
    //     console.log("newroll: dice");
    //     props.newRoll()
    // }

    return (

        <div id='dice'>

            <h2>Dice</h2>
            
            <Die 
                value={props.value}
                dieFace={props.dieFace} 
                newRoll={props.newRoll}    
            />

        </div>
    )
}

export default Dice