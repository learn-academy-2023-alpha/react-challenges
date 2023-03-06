import React from "react";

const DiceUI = (props) => {
    return (
    <>
        <div className="dice-box">Dice Here
            <div>
                <h3>Dice: {props.currentRoll}</h3>
                <button onClick={props.triggerNextRoll}>Click to Roll Dice</button>
            </div>
        </div>
        
    </>
    )
}

export default DiceUI;