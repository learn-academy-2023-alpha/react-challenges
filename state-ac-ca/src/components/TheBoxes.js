import React, {useState} from "react"
import Box from "./components/Box"

const TheBoxes = () => {
      // Create variable for all of the box objects
      const [theBoxes, setBoxes] = useState([])

      // Function for adding a box
      const addBox = () => {
            setBoxes([...theBoxes, <Box />])
      }

      // Function for removing a box
      const removeBox = () => {
            setBoxes(theBoxes.filter((value, index) => index < theBoxes.length - 1))
      }

      return (
            {theBoxes}
      )
}

export default TheBoxes