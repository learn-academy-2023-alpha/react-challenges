import React from 'react'
// As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
const BadRobot = ({textInput}) => {


    const replacedInput = (userInput) => { 
        let inputArray = userInput.split("")
        return inputArray.map((value, index) => { // ["h", "e", "y"]
            value.replace(value, "B") // want "h" -> "B" this line wasnt being read
            return inputArray.join("") 
    })
    
}
console.log(replacedInput("hey")) // ['hey', 'hey', 'hey']

  return (
    <>
    <h1>Bad Robot</h1>
    <p>I hear you saying . Is that correct?</p>
    </>
  )
}

export default BadRobot;

// tried to use for loop, was just reading last line and outputting "A"
    // const replacedInput = (userInput) => { 
    //     for(let i=0; i < userInput.length; i++) {
    //         return userInput[i].replace(userInput[i],"B") && userInput[i+1].replace(userInput[i+1],"L") && userInput[i+2].replace(userInput[i+2],"A")
    //     }
    
    // }
