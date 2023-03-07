import React from 'react'

const ToLowerCase = ({robot}) => {
    const changeToLowerCase = (userInput) => {
        return userInput.toLowerCase(robot)
    }
  return (
    <>
    <p>Hello, Are you saying {changeToLowerCase(robot)}?</p>
    
    </>
  )
}

export default ToLowerCase