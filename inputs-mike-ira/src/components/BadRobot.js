import React from 'react'

const BadRobot = ({roboTest}) => {

const replaceInput = (input) => {
   return input.replaceAll(input, "BLA")
}

  return (
    <>
        <h3>Bad Robot</h3>
        <p>All I hear is {replaceInput(roboTest)}!</p>
    </>
  )
}

export default BadRobot