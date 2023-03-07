import React, {useState} from 'react';

const OrderList = (props) => {
    return (
        <>
            <p>{props.price}</p>
            {props.ordered && 
            <p>ordered</p>
            }
        </>
    )
}

export default OrderList;