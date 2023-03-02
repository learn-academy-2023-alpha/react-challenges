As a developer, you are tasked with creating a dice application. The application will allow the user to roll a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged creating a list of all the previous rolls.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. App.js controls of all the data in state, renders the other components, and passes data to the dice and roll component.

//create an array of numbers 1-6 to represent the sides a die, and return the random value represented when the dice is rolled we will need a useState that saves the previous rolls creating a list of those rolls

//dice ui will be in its own component.
//roll log ui will be in its own component.


As a user, I can see a square box on the screen with a black border and a white background.

As a user, I can click on the box to roll the dice and see the result of my roll in the box.

As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.