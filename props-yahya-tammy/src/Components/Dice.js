import React from 'react'

const Dice = (props) => {
  return (
    <div className = "dice" onClick={props.rollDice} >{props.diceNumbers}</div>
  )
}

export default Dice