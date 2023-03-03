import React, {useState} from 'react';
import Results from './Results';



const Die = (props) => {
    // - Die component tracks its current value and displays that value
        // - has an onclick that will call a new roll method to randomize its value

    // Use the hook for creating a value for the die and another hook for the style for displaying the die     

    

    // const passRoll = () => {
    //     console.log("new roll: die");
    //     props.newRoll()
    // }


   
    


    return (

        <div className={props.style} onClick={() => props.newRoll()}>
         

            <h2>{props.value}</h2>
        </div>
    )
}



export default Die