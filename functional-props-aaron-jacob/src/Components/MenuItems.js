import React from 'react'

function MenuItems(props) {
  return (
    <>
  <p> {props.name}, {props.price.toFixed(2)}  </p> {props.ordered && <p>ordered</p>}
 <button onClick={()=> props.order(props.index)}>
    order
 </button>
    </>
  )
}

export default MenuItems