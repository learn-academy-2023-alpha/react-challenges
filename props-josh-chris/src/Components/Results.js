import React, { useState } from 'react'

const Results = (props) => {

    
    return (
        
        <div>
            <ul>
                Results 
                {props.rollsList.map(value => <li>{value}</li>)}
            </ul>
        </div>
        
    )
}

export default Results