// Create die
// Create onClick for dice
// Return the value from the dice roll with props from App.js to Dice.js

import React from "react"

const Dice = (props) => {
    return (
        <>
        <div className="Dice-Roller">{props.num}</div>
        </>
    )
}

export default Dice