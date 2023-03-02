import React from "react"
import Box from './components/Box'
import './App.css'

const App = () => {
 return (
  <>
    <h1>This is a box game</h1>
    <h2>Click on the boxes to change their color</h2>
    <div>
      <tr>
        <td><Box /></td>
        <td><Box /></td>
        <td><Box /></td>
      </tr>
      <tr>
        <td><Box /></td>
        <td><Box /></td>
        <td><Box /></td>
      </tr>
      <tr>
        <td><Box /></td>
        <td><Box /></td>
        <td><Box /></td>
      </tr>
    </div>
    <footer>Brandon & CJ | Alpha Cohort 2023</footer>
  </>
 )
}
export default App;
