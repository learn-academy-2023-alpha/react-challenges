import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MenuItem from './Components/Menu';
import OrderList from './Components/Order';

const App = () => {
const [Menu, setMenu] = useState([
  {name: "taco", price: 3.00, ordered: false},
  {name: "pizza", price: 2.00, ordered: false},
  {name: "'burg", price: 23.00, ordered: false},
])
const orderItem = (selectedItemIndex) => {
  Menu[selectedItemIndex].ordered = true
  setMenu([...Menu])
}

  

  return (
    <>
    <h1>ORDER SOMETHING ALREADY!</h1>
    <h2>THIS IS A MENU!</h2>
      {Menu.map((item, index) => {
        return (
          <MenuItem
          item={item}
          key={index}
          orderItem={orderItem}
          index={index}
          />
          
        )
        
})}
<OrderList />
    </>
  )

}



export default App;