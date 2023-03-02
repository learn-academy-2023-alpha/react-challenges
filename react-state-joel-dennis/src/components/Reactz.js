import { useState } from "react"

const Reactz = () => {
  const [miles, setMiles] = useState(0)
  const addAMile = () => {
    setMiles(miles + 1)
    console.log("miles", miles)
    return miles
  }
  return(
    <>
      <h2>Black Box</h2>
      <p>Miles: {miles}</p>
      <button onClick={addAMile} >Add a mile </button>
    </>
  )

}
export default Reactz