import React from "react";
const Menu = (props) => {
     //console.log(props)
    return (
        <>
        <p>{props.item.name}</p>
        <p>{props.item.price}</p>
        {props.item.ordered && 
            <p>Ordered</p>
        }
        
        <button onClick={() => props.orderItem(props.index)}>Order</button>
        </>
    )
}

export default Menu