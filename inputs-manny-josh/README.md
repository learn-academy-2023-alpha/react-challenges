As a user, I can see a landing page with heading and a text input.
mian app.js , 
return <input type= "text"/>
landing page = Robo Active listening
As a user, I see titles of three robots waiting for my text. 
<h1>Good Robot</h1>
component call
<h1>Bad Robot</h1>
component call
<h1>Kanyebot</h1>
component call
As a user, I see my "Good Robot" repeating exactly what I type in real time.
Create component RepeatExact.js pass through the onChange with no modification
As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
Blah.js method or function .map() that cycles through array for return ["B","L","A"] 
As a user, I see a third robot that modifies the input as per the developer's choice in real time.
ToLowerCase.js return  toLowercase() 

As a developer, you are tasked with creating an application where three "robots" are listening to the text that a user types. As the user types, each robot responds in real time with a different modification to the input.

When creating a project it is important to think about organizing your code so that you are not repeating yourself unnecessarily. It is a best practice to separate and compartmentalize all the actions in your code. In this application, App.js will handle the state values, inputs, and event listener method. Each robot will be in its own display component. The state value can be passed to the nested components where the individualized manipulation of words can be handled by each robot.

Stretch Goals 
As a user, I see a fourth robot that modifies the input as per the developer's choice in real time.
.toUppercase - copy line 17
As a user, I can see pleasant stylings on the application.
