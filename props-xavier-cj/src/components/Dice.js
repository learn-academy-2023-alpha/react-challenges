import React from "react";


const Dice =(props)=> {
    <div onClick = {props.diceNumberSetter}></div>
    if(props.diceNumber === 1) {
    return <div className='dice img-1'></div>;
}   else if(props.diceNumber === 2) {
    return <div className='dice img-2'></div>;
}   else if(props.diceNumber === 3) {
    return <div className='dice img-3'></div>;
}   else if(props.diceNumber === 4) {
    return <div className='dice img-4'></div>;
}   else if(props.diceNumber === 5) {
    return <div className='dice img-5'></div>;
}   else if(props.diceNumber === 6) {
    return <div className='dice img-6'></div>;
}

}
export default Dice