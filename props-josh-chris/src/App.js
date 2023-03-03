import React, {useState} from 'react'
import Dice from './Components/Dice'
import Rolls from './Components/Rolls'
import './App.css'
import die1 from './Assets/1dice.png'
import die2 from './Assets/2dice.png'
import die3 from './Assets/3dice.png'
import die4 from './Assets/4dice.png'
import die5 from './Assets/5dice.png'
import die6 from './Assets/6dice.png'


const App = () => {

    const [value, setValue] = useState('?')
    const [rollsList, setRollsList] = useState([""]) 
    const [dieFace, setDieFace] = useState(die1)
    
    // function for creating a new roll 
    const newRoll = () => {
        // use a random number generator to create a value within the size of the die
        setValue(Math.ceil(Math.random() * 6))
        // pass the new value as a prop to results
        // addRoll(value)
        setRollsList([...rollsList, value])
        console.log("rolled: " + value)

        switch (value) {
            case "1":
                  setDieFace(die1);
                  break;
            case 2:
                  setDieFace(die2);
                  break;
            case 3:
                  setDieFace(die3);
                  break;
            case 4:
                  setDieFace(die4);
                  break;
            case 5:
                  setDieFace(die5);
                  break;
            case 6:
                  setDieFace(die6);
                  break;
            default:
        }
      }

    const refresh = () => {
        setRollsList([])
    }

    return (
        <div>
            <h1>Roll for Initative</h1>

            <Dice
                value={value}
                dieFace={dieFace}
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