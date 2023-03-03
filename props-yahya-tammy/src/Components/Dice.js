const Dice = (props) => {
  return (
    <div className = "dice" onClick={props.rollDice}><div className = "img1"></div>{props.diceImages}{props.diceNumbers}</div>
  )
}

export default Dice