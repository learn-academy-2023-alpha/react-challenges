import React, {useState} from 'react'
import GoodBot from './components/GoodBot'
import BadBot from './components/BadBot'
import UglyBot from './components/UglyBot'
import './App.css'

const App = () => {
      // Create states
      const [userInput, setUserInput] = useState("")
      const [goodOutput, setGoodOutput] = useState("")
      const [badOutput, setBadOutput] = useState("")
      const [uglyOutput, setUglyOutput] = useState("")

      // Create functions
      // Create a function to process updates to the user input
      const handleChange = (e) => {
            setUserInput(e.target.value)

            goodText()
            badText()
            uglyText()
      }
console.log("g: ", goodOutput, "b: ", badOutput, "u: ", uglyOutput)

      // Create a function to process text for the GoodBot
      const goodText = () => {
            if(userInput === ""){
                  setGoodOutput("")
            }else{
                  setGoodOutput(userInput)
            }
      }

      // Create a function to process text for the BadBot
      const badText = () => {
            if(userInput === ""){
                  setBadOutput("")
            }else{
                  let emptyArray = userInput.split("")
                  setBadOutput(emptyArray.map((value, index) => {
                        if(index % 3 === 0) {return "B"}
                        else if(index % 3 === 1){return "L"}
                        else if(index % 3 === 2){return "A"}
                  }))
            }
      }

      // Create a function to process text for the UglyBot
      const uglyText = () => {
            if(userInput === ""){
                  setUglyOutput("")
            }else{
                  setUglyOutput("Error 203: Partial Information")
            }
      }

  return (
      <>
      <h1>Robots Talking Back</h1>
      <input type="text" onInput={handleChange} value={userInput}/>

      <div>
            <GoodBot text={goodOutput}/>
            <BadBot text={badOutput}/>
            <UglyBot text={uglyOutput}/>
      </div>
      </>
  )
}

export default App