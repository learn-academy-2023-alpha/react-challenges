import React,{useState} from "react"

const Prac = () => {
const [count, setCount] = useState(0) 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
const buttonClick = () => {
    
return document.querySelector("p").innerHTML = randomNumber1
} 
 return (
<>

<p>0</p>    
    <h1>let us check to make sure this works</h1>   
<button className="button" onClick={buttonClick}>change</button>

</>

 

 )


 
//     
//     var randomImageSource = "Images/" + randomDiceImage;
//     var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);
// var randomNumber2 = Math.floor(Math.random() * 6) +1;
// var randomImageSource2 = "Images/dice" + randomNumber2 + ".png";
// 
// if(randomNumber1 > randomNumber2) {
// 
// }
// else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML ="player 2 is the biggest snake eyes ever";
// }
// else {
//     document.querySelector("h1").innerHTML = "Shoot it out because its a draw";
// }
//  )  
    
}




export default Prac 