import React, { useState } from 'react'


const Box = () => {
    const [color, setColor] = useState("white")
    const [backgroundColor, setBackgroundColor] = useState(color)
    const rainbow = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    // a State that will hold my color
    // dynamic - reusable
    // State can work with a lot!
    // State is temporary storage that can be updated from it's initial value
    // iterate through rainbow array and change the color to one of the array values on click
    // Math.floor(Math.random()*rainbow.length).toString(16)

    const changeColor = () => {
        // rainbow[0]
        console.log("color", color)
        console.log(backgroundColor)
        setColor(rainbow[Math.floor(Math.random()*rainbow.length)])
        setBackgroundColor(color)
    }
    // const changeBGColor = () => {
    //     setColor()
    // }

    return (
        <>
            <div id = "square" onClick={changeColor} style={{ color: "black", backgroundColor: color }} ><h2>{color}</h2></div>
        </>
    )
}
export default Box