import React, {useState} from 'react'
import Refresh from './Refresh'
import Results from './Results'

const Rolls = (props) => {

    // const passRefresh = () => {
    //     console.log("refresh rolls");
    //     props.refresh()
    // }

    return (

        <div id='rolls'>
            <h2>Rolls</h2>
            <Refresh refresh={props.refresh}/>
            <Results rollsList={props.rollsList}/>
        </div>
        
    )
}

export default Rolls