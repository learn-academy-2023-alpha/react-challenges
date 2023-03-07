import React, {useState} from 'react'
import RepeatExact from './Component/RepeatExact'
import ToLowerCase from './Component/ToLowerCase'
import ToUpperCase from './Component/ToUpperCase'

const App = () => {
  const [robot,setrobot] = useState("")

  const handleChange = (e) => {
    setrobot(e.target.value)
  }

  return (
    <>
      <h1>Robo Active listening</h1>

      <input 
        type="text"
        onChange={handleChange}
        value={robot}
      />


      <h2>Good Robot</h2>
        <RepeatExact robot={robot} />
      <h3>Bad Robot</h3>

      <h4>Kanyebot</h4>
        <ToLowerCase robot={robot}/>

      <h5>Our Robot</h5>
        <ToUpperCase robot={robot}/>

    </>
  )
}

export default App