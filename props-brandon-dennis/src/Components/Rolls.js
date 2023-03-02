const Rolls = (props) => {
    return (

<>
  <div Previous Rolls> {props.rollLog} </div> 
 <button onClick={props.diceRoller} style={{
    height: 5,
    width: 5,
 }}></button>

</>
    )
}

export default Rolls