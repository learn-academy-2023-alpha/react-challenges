import React, { useState } from 'react'
import MenuItems from './Components/MenuItems'
import OrderItems from './Components/OrderItems'

function App() {

 const [menu, setMenu] = useState([
  {
    name:"Plain Ramen", ordered: false, price: 5.00
  },
  {
    name:"Soy Sauce Ramen", ordered: false, price: 6.00
  },
  {
    name:"Beef tip Ramen", ordered: false, price: 8.00
  }
 ])

const order = (selectedItem)=> {
  menu[selectedItem].ordered = true;
  return setMenu([...menu])
}

  return (<>

 {menu.map((item, index) => {
  return ( <MenuItems
    name={item.name} 
    key={index} 
    price={item.price}
    order={order}
    ordered={item.ordered}
    index={index}
    />)

 })}

<OrderItems 
menu={menu}

/>
 </> )
}

export default App