import React, {useState} from 'react'
import Box from './box'



const AddBox = () => {
    const [colors, setColor] = useState("white")
    const [box, setBox] = useState(0)
    const addBox = () => {
        setBox(<Box/>)
        return box
    }


  return (
    <>
<button onClick = {addBox}>Add a Box!</button>

    </>
  )
}

export default AddBox