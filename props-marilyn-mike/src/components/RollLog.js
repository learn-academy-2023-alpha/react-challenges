import React from "react";

const RollLog = (props) => {
// Pseudo:
// store the current roll value and after user clicks button again, the roll value gets logged 
console.log(props)
    return (
    <>
        <div className="roll-log-box">Roll Log
            {props.currentLog.map((log) => {
                return (
                    <ul>{log}</ul>
                )
          })}
          
        </div>
       
    </>
)

}

export default RollLog;