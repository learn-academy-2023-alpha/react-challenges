import React, {useState} from 'react'
import MenuItem from "./components/MenuItem"



const App = () => {
const [menu, setMenu] = useState([
  {foodName: "Taco", price:1.99, ordered: false},
  {foodName: "Cheeseburger", price:2.99, ordered: false},
  {foodName: "Burrito", price:5.99, ordered: false},
])
 const foodOrdered = (foodNameIndex) => {
    menu [foodNameIndex].ordered=true
    setMenu([...menu])
 }
  return (
    <>
      <h1>App</h1>
      {menu.map((item, index) => {
        return (
          <MenuItem
            item={item}
            key={index}
            foodOrdered={foodOrdered}
            index={index}
          />
        )
      })}  
hello

     
    </>
  )
}

export default App