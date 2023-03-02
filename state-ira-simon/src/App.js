import React from 'react'


// class App extends React.Component{
   
//     render(){
//        returns( 
//        <div className="App">
//         <h1> Welcome </h1>
//         </div> 
//     )
//     }
// }



function App() {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #000000",
      }}
      
    >
        white
        </div>
  );
}

export default App;















// 🟧 Challenge: Color Box

// As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.
// 📚 User Stories

//     As a user, I can see a square box on the screen with a black border and a white background
// (1) Completed


//     As a user, I can see the default color name "white" inside the box
// (2) Completed


//     As a user, every time I click on the box the name of a different color appears


//         Possible color names: red, orange, yellow, green, blue, purple, pink
//     As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
//     As a user, I can see many boxes on the page all acting independently of one another.

// 🏔 Stretch Goals

//     As a user, I can start with no boxes on the screen
//     As a user, I can see a button to add a box
//     As a user, I can see a button to remove a box
//     As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes
//     As a user, every time I click the remove button, I can remove the last box in the series
