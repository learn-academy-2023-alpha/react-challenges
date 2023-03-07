// 🟧 Challenge: Color Box
// As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.

// 📚 User Stories
// As a user, I can see a square box on the screen with a black border and a white background
// As a user, I can see the default color name "white" inside the box
// As a user, every time I click on the box the name of a different color appears
// Possible color names: red, orange, yellow, green, blue, purple, pink
// As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
// As a user, I can see many boxes on the page all acting independently of one another.

// 🏔 Stretch Goals
// As a user, I can start with no boxes on the screen
// As a user, I can see a button to add a box
// As a user, I can see a button to remove a box
// As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes
// As a user, every time I click the remove button, I can remove the last box in the series
// As a user, I can see a box that lets me input hexadecimal representation for custom colors

// Create an array for color options. Subsequent clicks through the array will loop through different indexes. Use Math.random and Math.round to randomize the index selection.
// Header container (with potential to expand by adding an addBox button and a removeBox button)
// Body container with flexbox for objects
// Within the body container is a division for each box. Each box will have a black border and default to white background. Inside of the container is an h2 to provide text. The text begins with an initial state of "white". Clicking on the text changes the color written in the text. Clicking inside of the box, but not on the text, sets the background color to the color described by the text.

import React, {useState} from "react"
import './App.css'
import Box from "./components/Box"

const App = () => {
      // Create variable for all of the box objects
      // This variable is an array of Box components, each with independent states
      const [theBoxes, setBoxes] = useState([])

      // Function for adding a box
      // The function deconstructs the array of existing Box components and adds those elements with an additional Box component the new array
      const addBox = () => {
            setBoxes([...theBoxes, <Box />])
      }

      // Function for removing a box
      // The function filters the array of existing Box components to elements with indexes less than the index of the final element in the array (.length - 1 is the index of the final element)
      const removeBox = () => {
            setBoxes(theBoxes.filter((value, index) => index < theBoxes.length - 1))
      }

      return (<>
      
      {/* Create a header division flexbox*/}
      <header>
            <h1>Diwali Color Bomb</h1>
            <button onClick={addBox}>Add Box</button>
            <button onClick={removeBox}>Remove Box</button>
      </header>

      {/* Create a body division flexbox*/}
            {/* Create a division for a single button
            Use React useState to create a string variable for the color
            onClick - set the background color to the state from useState
            Place a h2 object in the division that reads the state from the useState
                  onClick - randomize the index and set the text to show the useState value*/}
      <div id="flexxBoxx">
            {theBoxes}
      </div>

      {/* Create a footer division */}
      <div>
            <footer> ©2023 Aaron Criner and Chris Aument (ACCA)</footer>
      </div>
      </>)
}

export default App