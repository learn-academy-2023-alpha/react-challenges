const Rolls = (props) => {
    return ( 
        
<>
  <div> {props.rollLog} </div> 
 <button onClick={props.diceRoller} style={{
    height: 5,
    width: 5,
 }}></button>

</>
    )
    
}

export default Rolls