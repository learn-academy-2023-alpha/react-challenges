import React, { useState } from 'react';
import './App.css';
import Box from './component/Box'

const App = () => {
  const [rolls, setRolls] = useState([]);
  const [currentRoll, setCurrentRoll] = useState(null);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setCurrentRoll(roll);
    setRolls([...rolls, roll]);
  };

  return (
    <div className="container">
      <div className="box" onClick={rollDice}>
        {currentRoll ? <p className="dice">{currentRoll}</p> : <p className="roll">Click to Roll</p>}
      </div>
      <div className="log">
        <Box rolls={rolls} />
    
      </div>
    </div>
  );
}

export default App;