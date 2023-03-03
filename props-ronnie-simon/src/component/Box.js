// import react from  "react"
// import App from "./App.js"

const Box = (props) => {
    return (
    <>
    <h2>Roll Log</h2>
        <ul>
          {props.rolls.map((roll, index) => (
            <li key={index}>Roll {index + 1}: {roll}</li>
          ))}
        </ul>
    
     </>
)}
export default Box