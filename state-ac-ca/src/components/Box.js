import React, {useState} from "react"

const Box = () => {
// Create a global variable with an array of colors represented by strings or hexadecimal values
      const colorsArray = ["red", "yellow", "magenta", "blue", "green"]
      const [color, setColor] = useState("white")
      const [bgColor, setBGColor] = useState(color)
      const [style, setStyle] = useState("whiteBox")

      const changeColor = (event) => {
            setColor(colorsArray[Math.floor(Math.random() * (colorsArray.length))])
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
                  case "green":
                        setStyle("greenBox");
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