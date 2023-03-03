🌮 Challenge: Food Ordering App


As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

The menu UI will be in its own component

 as will the order UI. 
 
 App.js controls of all the data in state, renders the other components, and passes data to the menu and the order component.

📚 User Stories
As a user, I can see an application that has a list of food items and the price of each item.
//Menu and price

Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
// Use an Object : Food (name), Price , Ordered = false

As a user, I can click a button to select an item I wish to order.
//Create order button

As a user, I can see the items I have selected to order displayed on the page.
//Display items clicked on order button with prices

🏔 Stretch Goals
As a user, I can see the total cost of my current order.
Adding all ordered prices together

As a user, I can see both the base total cost of my food selections and the total that includes sales tax.
Add sales tax 8% = 1.08

As a user, I can see the total that includes sales tax rounded to two decimals.
.toFixed(2)
As a user, I can see an image of my food selection on the menu.

//   const [menu, setMenu] = useState([{
//     foodName1: "Taco",
//     foodName2: "Cheeseburger",
//     foodName3: "Fries",
//     foodName4: {
//       price1: 1.99,
//       price2: 3.00,
//       price3: 1.50,
//       price4: {
//         ordered: false,
//       }
//     }
// }])

// const [menu, setMenu] = useState([
//   {name: "Taco", ordered:false}
// ])