import React from 'react'

const Bbq = (props) => {
  return (
    <>
    <p>Food name: props.food.name</p>
    {props.foodItem.price.ordered && <p>ordered</p>}
    <button onClick={props.orderFood(props.index)}>Ordered Food</button>
    </>
  )
}

export default Bbq