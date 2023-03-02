import React, {useState} from 'react'


const Box = () => {
    const [colors, setColor] = useState("white")
    const changeName = () => {
        let colorArray = ["red", "yellow", "green", "orange", "blue", "purple", "pink"]
        setColor(colorArray[Math.floor(Math.random() * colorArray.length)])
    }


  return (
    <>
    <table border= "1">
      <tr>
        <td><button onClick = {changeName} style = {{backgroundColor: colors, height: "100px", width: "100px"}} >{colors}</button></td>
      </tr>
    </table>
    </>
  )
}

export default Box