import React, { useState } from 'react'

const ColorChanger = () => {
    const [color, setColor] = useState("")
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    const newColor = () => {
        setColor(colors.random)
        return color
    }
return(
    <>
    <button onClick = {color}> white </button>
    </>
)
}

export default ColorChanger