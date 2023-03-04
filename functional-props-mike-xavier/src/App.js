import React, { useState } from 'react'
import MenuUI from './components/MenuUI'
import OrderUI from './components/OrderUI'

const App = () => {

  const [menu, setMenu] = useState([
    {name: "Taco", price: "$1.99", ordered: false}, 
    {name: "Burrito", price: "$8.00", ordered: false}, 
    {name: "Nachos", price: "$13.00", ordered: false}, 
    {name: "Quesadilla", price: "$14.00", ordered: false}, 
    {name: "Beer", price: "$4.00", ordered: false}, 
    {name: "Milkshakes", price: "$2.50", ordered: false}, 
  ])
  const [orders, setOrders] = useState([])

  const orderFood = (selectedFood) => {
    menu[selectedFood].ordered = true
    setMenu([...menu])
  }

  // const orderLog = () => {
  // let logArray = orders
  // logArray.push(menu)
  // setOrders(logArray)
  // }

  return (
    <>
      <h1>The Best Tacos In The Universe</h1>
      <h2>Menu List</h2>
      {menu.map((item, index)=> {
        return (
          <MenuUI 
            item={item}
            key={index}
            orderFood={orderFood}
            index={index}
          />
        )
      })}
      {/* <OrderUI orderLog={orderLog}/> */}
    </>
  )
}

export default App