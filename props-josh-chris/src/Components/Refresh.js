import React, {useState} from 'react'
import Rolls from './Rolls'

    const Refresh = (props) => {

        // const passRefresh = () => {
        //     console.log("refresh refresh");
        //     props.refresh()
        // }

    return (

        <div>
            <button onClick={() => props.refresh()}>Refresh</button>
        </div>
    )
}

export default Refresh