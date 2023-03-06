import React, { useState } from 'react'
import './App.css';
import Menu from './components/Menu'
import Order from './components/Order'

const App = () => {
  const [menu, setMenu] = useState([
    { name: "Carne asada fries", price: 12, ordered: false},
    { name: "California burrito", price: 15, ordered: false},
    { name: "Fish tacos", price: 10, ordered: false},
    { name: "Quesadilla", price: 9, ordered: false},
    { name: "Ceviche", price: 8, ordered: false},
  ])

// Create a function with an argument of which item I clicked on so that I can pass to MenuItem as props and be call when the button is clicked
const orderItem = (selectedItemIndex) => {
  // find the item by index in the menu array, the access the ordered property and reassign the value to true

  // menu[selectedItemIndex] === {name: "Ribs", ordered: false}
  menu[selectedItemIndex].ordered = true
  // spread operator ... makes a copy of menu with the updated value
  setMenu([...menu])
}
const [customerOrder, setCustomerOrder ] = useState([])
const orderList = (selectedItemIndex) => {
  customerOrder[selectedItemIndex].price
  setCustomerOrder([...customerOrder])
} 
  return (
    <>
    <h1></h1>
    <h2>Menu </h2>
    {menu.map((item, index, price,) => {
      return (
        <Menu 
          item={item} 
          key={index}
          orderItem={orderItem}
          index={index}
          price={price}
        />
    
      )
    })}
    <Order />
  </>
  )
}

export default App
