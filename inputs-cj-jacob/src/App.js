import './App.css';
import React, { useState } from 'react';
import Good from './Components/Good';
import Bad from './Components/Bad';
import Mah from './Components/Mah';
import Reverse from './Components/Reverse';
function App() {
  const [script ,setScript] =  useState("")
  const handleChange = (e)=> {
    setScript(e.target.value)
  }
  return (
   <>
   <h1>Listening Robot</h1>
   <input 
   type="text"
   onChange={handleChange}
   value={script}
   />
   <Good script={script}/>
   <Bad script={script}/>
   <Mah script={script}/>
   <Reverse script={script}/>
   </>
  );
}

export default App;
