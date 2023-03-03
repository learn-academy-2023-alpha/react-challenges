import React, {useState} from 'react'
import Menu from './Components/Menu'
import Order from './Components/Order'

const App = () => {
  // Pseudo: create an array of objects for menu items. Each item will have a name, price, and ordered key value pair.
  const [theMenu, setTheMenu] = useState([
{name: "taco", price: 5.00, ordered: false},
{name: "burrito", price: 14.00, ordered: false},
{name: "enchilada", price: 11.05, ordered: false},
{name: "quesadilla", price: 7.00, ordered: false}
  ])
// Pseudo: create an empty array for orders(which will be strings) to be pushed into once they are created to keep track of order history.
const [orderHistory, setOrderHistory] = useState([])
// Pseudo: create a function that receives orders from Menu.js and pushes those orders into the orderHistory array.
// "Youve order (name), which costs (price)"
const createOrder = (selectedItem) => {
  theMenu[selectedItem].ordered = true
  setTheMenu([...theMenu])
  setOrderHistory([...orderHistory, `You've ordered ${theMenu[selectedItem].name}, which costs $${theMenu[selectedItem].price}. `])
}


  return (<>
    <h1>App</h1>
    <Menu/>
    <Order orderHistory = {orderHistory}/>
    </>)
}

export default App