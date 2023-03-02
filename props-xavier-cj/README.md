Challenge: Dice Roller
As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged creating a list of all the previous rolls.
<!-- psuedocode : Create a dice application, 6 sided dice, everytime we click the dice we want to see a random number and every time we click we want to display that number. Each time the user rolls the dice, each roll is logged creating a list of all previous rolls
 -->

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. App.js controls of all the data in state, renders the other components, and passes data to the dice and roll component. 
<!--  Two seperate compponents, a roll component and a dice component, both components will meet on the app.js  -->

 User Stories
As a user, I can see a square box on the screen with a black border and a white background.
<!-- story 1 psuedo code : Expect output : a square box on the screen with a black border and a white background. Input:n/a 
Dice component 
 -->
As a user, I can click on the box to roll the dice and see the result of my roll in the box.
<!-- psuedocode : Expected output : see the result of of roll in the box. 
input:user click 
We want create an state that will produce a random number between 1 and 6
esthablish a use state called Dicenumber and we will declare a use state with a starting value of 6 and upon user click it will set the Dicenumber  between 1 and 6. 
 -->
 As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice. 
<!--  Psuedocode : create roll.js component 
component will track and keep a log of amount of times the dice is rolled. we can create (a rolls use state) that starts as a blank string and the way to set rolls should be tied to the result our function diceNumberSetter. 
 -->
🏔 Stretch Goals
As a user, I can see the image of a dice face when I roll the dice.
As a user, I can click a restart button that clears my roll log.