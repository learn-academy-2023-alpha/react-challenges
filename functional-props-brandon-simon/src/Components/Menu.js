import React, {useState} from "react";

const MenuItem = (props) => {
    return (
        <>
            <p>{props.item.name} ${props.item.price}</p>
            
            {props.item.ordered && 
            <p>ORDERED</p>
            }
             {/* Create a function in this button that will save the ordered items into an array, filter the price of those items, and add those prices together. */}
            <button onClick={() => props.orderItem(props.index)}>ORDER!</button>
        </>
    )
}

export default MenuItem;