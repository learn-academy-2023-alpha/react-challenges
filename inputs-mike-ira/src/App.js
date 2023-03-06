import React, {useState} from 'react'
import BadRobot from './components/BadRobot'
import GoodRobot from './components/GoodRobot'
import LazyRobot from './components/LazyRobot'

const App = () => {

  const [roboTest, setRoboTest] = useState("")

  const handleChange = (e) => {
      setRoboTest(e.target.value)
  }

  return (

    <>
    <h1>Robo Active Listener</h1>
    <h2>Say Something:</h2>
    <input text="text" onChange={handleChange} value={roboTest}/>
    
    <GoodRobot roboTest={roboTest}/>
    <BadRobot roboTest={roboTest}/>
    <LazyRobot roboTest={roboTest}/>
    </>
    
  )
}

export default App
