import React from 'react'

const MenuUI = (props) => {
  return (
    <>
    <p>{props.item.name}<br></br>{props.item.price}</p>
    {props.item.ordered &&
        <p>Good Choice!</p>
    }
    <button onClick={() => props.orderFood(props.index)}>Buy Me</button>
    </>
  )
}

export default MenuUI