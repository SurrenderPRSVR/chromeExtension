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

let box = document.getElementById("box")
box.addEventListener("click", function() {
    console.log("I want to open the box!")
})