import React, { useState } from "react";


const Box = () => {
    const [currentColor, setCurrentColor] = useState("white")
    const colors = [1, 2, 3, 4, 5, 6,]

    const colorSelector = () => {
        const randomNum = Math.floor(Math.random() * colors.length)
        setCurrentColor(colors[randomNum])
        console.log(colorSelector(randomNum))
    }

    return (
        <>
            <div className="color-box" style={{ backgroundColor: currentColor }} onClick={colorSelector}>
                {}

            </div>
        </>
    );
}

export default Box;