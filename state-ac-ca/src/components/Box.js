import React, {useState} from "react"

const Box = () => {
// Create a global variable with an array of colors represented by strings or hexadecimal values
      const colorsArray = ["red", "yellow", "magenta", "blue"]
      const [color, setColor] = useState("white")
      const [bgColor, setBGColor] = useState(color)
      const [style, setStyle] = useState("whiteBox")

      const changeColor = (event) => {
            setColor(colorsArray[Math.round(Math.random() * (colorsArray.length - 1))])
            {event.stopPropagation()}
      }

      const showColor = () => {
            setBGColor(color)

            switch (bgColor){
                  case "white":
                        setStyle("whiteBox");
                        break;
                  case "red":
                        setStyle("redBox");
                        break;
                  case "yellow":
                        setStyle("yellowBox");
                        break;
                  case "blue":
                        setStyle("blueBox");
                        break;
                  case "magenta":
                        setStyle("magentaBox");
                        break;
                  default:
                        console.log("Error");
            }
      }

return (
      <div
      className={style}
      onClick={showColor}>
      <h2 onClick={changeColor}>{color}</h2>
      </div>
)
}

export default Box