import React, { useState } from "react"

const Box = () => {
    const [colorName, setColorName] = useState("white")
    const colorArray = [ "red", "orange", "yellow", "green", "blue", "purple", "pink" ]
    // input colorArray
    // set random color to colorName
    // ouput random color name from colorArray
    const colorNamePicker = () => {
        setColorName(colorArray[Math.floor(Math.random()* colorArray.length)])
        return colorName
    }
  return (
    <>
    <div
       style = {{
            width: 200,
            height: 200,
            backgroundColor: colorName,
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 5,
            borderStyle: "solid",
            textAlign: "center", 
       }}
    > <p onClick={colorNamePicker} style={{padding: 70}}>{colorName}</p>
    </div>
    </>
  );
}

export default Box