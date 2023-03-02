import React from "react"

// const Box = () => {
//     return
//     <div
//         style ={(
//             width: 500,
//             Height: 500,
//             backgroundcolor: 'white',
//             Bordercolor: 'black',
//             borderSize: 5,
//             borderStyle: 'solid',
//         )}
//         >
//         <div/>
    
// }
import React from 'react'

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function App() {
  return (
    <BoxContainer>
      style={{
        backgroundColor: '#333',
        borderRadius: 4,
        color: '#eee',
        minHeight: 200,
        padding: 12,
        width: 300,
      }}
    
      Sally Montgomery
    </BoxContainer>
  )
}

