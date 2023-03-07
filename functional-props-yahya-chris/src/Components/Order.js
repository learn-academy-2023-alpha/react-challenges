import React from 'react'

const Order = (props) => {
  return (<>
    <div><h2>Order</h2>
    {props.orderHistory.map(order =>{<li>order</li>)}
    </div>
    </>)
}

export default Order