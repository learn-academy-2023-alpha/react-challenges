import React, {useState} from 'react'
import Dice from './Components/Dice'
import Rolls from './Components/Rolls'
import './App.css'


const App = () => {

    const [value, setValue] = useState('?')
    const [rollsList, setRollsList] = useState([""]) 
    const [style, setStyle] = useState('die')
    
    // function for creating a new roll 
    const newRoll = () => {
        // use a random number generator to create a value within the size of the die
        console.log("newroll app");
        setValue(Math.ceil(Math.random() * 6))
        // pass the new value as a prop to results
        // addRoll(value)
        setRollsList([...rollsList, value])
        switch (value){
            case 1:
                  setStyle("die1");
                  break;
            case 2:
                  setStyle("die2");
                  break;
            case 3:
                  setStyle("die3");
                  break;
            case 4:
                  setStyle("die4");
                  break;
            case 5:
                  setStyle("die5");
                  break;
            case 6:
                  setStyle("die6");
                  break;
            default:
      }
    }

    // const addRoll = (newRoll) => {
        
    // }

    const refresh = () => {
        console.log("refresh app");
        setRollsList([])
    }

    return (
        <div>
            <h1>Roll for Initative</h1>

            <Dice 
                value={value}
                style={style}
                newRoll={newRoll}
            />
            <Rolls 
                rollsList={rollsList}
                refresh={refresh}    
            />
            
        </div>
    )
}

export default App