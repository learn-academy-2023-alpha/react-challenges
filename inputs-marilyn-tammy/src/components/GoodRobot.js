import React from 'react'

// As a user, I see my "Good Robot" repeating exactly what I type in real time.

const GoodRobot = ( {textInput} ) => {
  return (
    <>
    <h1>Good Robot</h1>
   <p>I hear you saying {textInput}. Is that correct?</p>
    </>
  )
}

export default GoodRobot;
