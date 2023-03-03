import React from 'react'

const MenuItem = (props) => {
  return (
    <>
        <p>{props.item.foodName}</p>
        <p>{props.item.price}</p>

        {props.item.ordered && 
            <p>Item has been ordered!</p>
        }

        <button onClick={()=>props.foodOrdered(props.index)}>Order Here!</button>

    </>
  )
}

export default MenuItem