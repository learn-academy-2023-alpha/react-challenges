import React, {useState} from 'react'
import Bbq from "./Components/Bbq"

const App = () => { 
  const [myFood, setmyFood] = useState ([
    {name: "Hot Dog", ordered: false},
    {name: "hamburgers", ordered: false},
    {name: "pickles", ordered: false},
    {name: "chicken", ordered: false},
    {name: "cole slaw", ordered: false},
    
    ])
const orderedFood = (selectedFood) => {

} 
  return (
    <>
    <h1>Food Items</h1>
        {myFood.map((foodItem, index) => {
          return (
           < Bbq
           foodItem={foodItem}
           key={index}
           orderedFood={orderedFood}
           index={index}
          />
          
         )
     })}
   </>
  )
}

export default App