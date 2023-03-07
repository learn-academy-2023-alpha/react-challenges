import React from 'react'

const ToUpperCase = ({robot}) => {
    const changeToUpperCase = (userInput) => {
        return userInput.toUpperCase(robot)
    }
  return (
    <>
    <p>Hello, Are you saying {changeToUpperCase(robot)}?</p>
    
    </>
  )
}

export default ToUpperCase