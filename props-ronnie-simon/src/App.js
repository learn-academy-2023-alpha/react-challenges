import React, { useState } from "react";
// This import is for us to establish our state
import Box from "./component/Box";
// importing our component
import './App.css';

const App = () => {
  const [boxes, setBoxes] = useState([])
  const addBox = () => {
    setBoxes(boxes.concat(<Box />))
  }


  const subBox = () => {
    setBoxes(boxes.slice(0, boxes.length - 1))
  }

  return (
    <>
      <h1> Hello Office Hours ! </h1>
      <Box />
      <button onClick={addBox}> Click to add box</button>
      <button onClick={subBox}> Take that box away</button>
      <div className="color-boxes">
        {boxes.map((box, index) => {
          return (
            <div key={index}>
              {box}
            </div>
          )
        })}
      </div>
      <br />
    </>
  );
}

export default App;