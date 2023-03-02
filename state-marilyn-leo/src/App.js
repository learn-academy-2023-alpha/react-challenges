// As a user, I can see a square box on the screen with a black border and a white background
// As a user, I can see the default color name "white" inside the box
// As a user, every time I click on the box the name of a different color appears
// Possible color names: red, orange, yellow, green, blue, purple, pink
// As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
// As a user, I can see many boxes on the page all acting independently of one another.

// Pseudo code:
// create a table using <tr></tr> and <td></td> "white" with border color: black background color: white
// create a button inside the box
// onClick to change the color name every time user clicks
// make color component Color.js for Possible color names: red, orange, yellow, green, blue, purple, pink
// use hover to change background color of the box
// create multiple tables with its own functionality

// start with white box with button that says "white" inside
// hover and see next color before click
// .box for border, background

import ColorChanger from './components/ColorChanger'
import React, { useState } from 'react'

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function App() {
return (
    <>
      <Box
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          borderStyle: 'solid',
          color: 'black',
          minHeight: 100,
          padding: 100,
          width: 200,
          textAlign: 'center',
      }}
      > 
      <button> white </button>
      </Box>
  </>
)
}
