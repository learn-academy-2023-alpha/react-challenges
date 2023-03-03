// // User Stories
// As a user, I can see an application that has a list of food items and the price of each item.
// Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
// As a user, I can click a button to select an item I wish to order.
// As a user, I can see the items I have selected to order displayed on the page.

import React, { useState } from 'react';
import InTheBag from './Components/InTheBag';
import MenuItem from './Components/MenuItem';

const App = () => {
const [menu, setMenu] = useState([  
  {name: "apples", price: 1, ordered: false},
  {name: "oranges", price: 3, ordered: false},
  {name: "bananas", price: 2, ordered: false},
  {name: "pears", price: 4, ordered: false},
  {name: "grapes", price: 1, ordered: false}
])
const [orderedItems, setOrderedItems] = useState([])

const orderItem = (selectedItemIndex) => {
  menu[selectedItemIndex].ordered = true
  setMenu([...menu])
menu.filter(item => item.ordered === true
  )
}
  return (
    <>
      <h1>Fruit Menu</h1>
        <h2>Menu</h2>
          {menu.map((item, index) => {
            return (
              <MenuItem 
              item={item} 
              key={index}
              orderItem={orderItem}
              index={index}
            />
            

          )
        })}
            <h2>Cart</h2>
            <InTheBag 
            
              
              />
            
    </>
  )
}
  


export default App;
