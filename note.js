/* Create a person object that contains three keys: name, age, and country
 Create a function logData(), that uses the persona object to create a 
 string in the following format:
 "Per is 35 yeras old and lives in Norway"
 Call the logData() function to verify that it works */

// let person = {
//     name: "Heather",
//     age: 39,
//     country: "USA"
// };

// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in the " + person.country)
    
// }

// logData();

/* Create a conditional statement (if/else/else if) that logs out the discount
   the passenger will get based upon the value of the age variable

   less than 6 years old -> free
   6 to 17 years old     -> child discount
   18 to 26 years old    -> student discount
   27 to 66 years old    -> full price
   over 66 years         -> senior citizen discount

   
*/

// let age = 15;

// if (age < 6) {
//     console.log("free");
// } else if (age >= 6 && age <= 17) {
//     console.log("child discount");
// } else if (age >= 18 && age <= 26) {
//     console.log("student discount");
// } else if (age >= 27 && age <= 66) {
//     console.log("full price");
// } else {
//     console.log("senior citizen discount");
// }



/* use a for loop to log the following to the console:

The 5 largest countries in the world:
China
India
United States
Indonesia
Pakistan

*/

// let largeCountries = ["China", "India", "USA", "Indonesia","Pakistan"]
// for(let i = 0; i < largeCountries.length; i++){
//     console.log(largeCountries[i]);
// }

/* use push() and pop() and their counterparts unshift() and shift() to 
fix the array so that China and Pakistan are added back into their respective places
*/

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia","Monaco"]

// largeCountries.shift(); //removes "Tuvalu"
// largeCountries.pop(); // removes "Monaco"
// largeCountries.unshift("China"); // adds "China" to the beginning of the array
// largeCountries.push("Pakistan"); // adds "Pakistan" to the end of the array

// for(let i = 0; i < largeCountries.length; i++){
//     console.log(largeCountries[i]);
// }

// let dayOfMonth = 13;
// let weekday = "Friday";
// if ("Friday" && 13) {
//     console.log(":hankey:")
// }
// or
// if (weekday === "Friday" && dayOfMonth=== 13) {
//     console.log(":hankey:")
// }
// let hands = ["rock", "paper", "scissor"];
// let randomIndex = Math.floor(Math.random() * hands.length);
// let randomHand = hands[randomIndex];
// console.log(randomHand);
// or
// function getHand() {
//     let randomIndex = Math.floor(Math.random() * hands.length);
//     return hands[randomIndex]
// }
// console.log(getHand)
// let color = ["white", "blue", "black", "green", "red"]
// function colorRandom() {
//     let randomIndex = Math.floor(Math.random() * color.length);
//     return color[randomIndex]
// }
// console.log(colorRandom())
// let piece = ["blue", "red", "red", "blue", "red"]
// let blueShelf = document.getElementById("blue-shelf")
// let redShelf = document.getElementById("red-shelf")
// function sortPieces() {
//     blueShelf.textContent = '';
//     redShelf.textContent = '';
//     for (let i = 0; i < piece.length; i++) {
//         if (piece[i] === "blue") {
//             blueShelf.textContent += piece[i] + ' ';
//         } else if (piece[i] === "red") {
//             redShelf.textContent += piece[i] + ' ';
//         }
//     }
// }
// sortPieces()

/* 1. Grab the box from the DOM and store it in a variable
   2. Add a click event listener to the box
   3. Log out "I want to open the box!" when it's clicked */

// let box = document.getElementById("box")
// box.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })



// If possible, use const. If not, use let.
// which variables below should be changed from let to const?
// The customer wants to order some stuff. Here are the details:

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whoops! Turns out the shipping will be a bit more complex

// shippingCost = 15
// shippingTime = "7-12 days"

// // Calculating the full price
// const fullPrice = basePrice - discount + shippingCost

// //Finally, notifying the customer

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// Use .innerHTML to render a Buy! button inside the div container

// const container = documentGetElementId("container")
// container.innerHTML = "<button onclick'buy()'>Buy!</button>"

// function buy(){
//    container.innerHTML += "<p>Thank you for buying!<p>"
// }
  
// // create element 
// document.createElement("li")
// // store in variable
// const li = document.createElement("li")
// //set text cntent
// li.textContent = myLeads[i]
// // append to ul
// ulEl.append(li)

// template strings/literals

// const recipient = "James"
// const sender = "Heather"

// //Refactor the email string to use template strings

// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)

// 1. Save a key/value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// localStorage.setItem("myName", "Heather Flanders")
// let name = localStorage.getItem("myName")
// localStorage.clear()

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)