// let userName = prompt("what is your name?"); //ask for the username
// console.log("Hello, " + userName + "! Welcome to javascript.");
// alert("hi " + userName + "! Glad to meet you.");

// let a = 5, b=6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// // comparison operator
// console.log(5 == '5');//true
// console.log(5==='5');//false
// console.log(5 != 3); //true
// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5>=5) //true

// //Logical Operator
// let age = 24;
// let hasLicense = true;

// console.log(age >= 18 && hasLicense);//True
// console.log(age < 18 || hasLicense); // True
// console.log(!hasLicense); // False

// // Control FLow (if/else)

// let manavage = 2;

// if(manavage>=18){
//     console.log("you can vote!");
// }else{
//     console.log("you're to young to vote.");
// }

// // else if (multiple condition)

// let score = 75;

// if(score >= 90){
//     console.log("A grade");
// }else if(score >= 80){
//     console.log("B grade");
// }else if(score >= 70){
//     console.log("C grade");
// }else{
//     console.log("Fail");
// }

// // Ternary Operator

// let isLoggedIn = true;
// let message = isLoggedIn ? "Welcome!" : "Please log in";
// console.log(message);

// let userAge = prompt("Enter your Age");
// if(userAge >= 18){
//     alert("you're eligible to watch ")
// }else{
//     alert("you're not eligible to watch porn")
// }

// let randomNumber = Math.floor(Math.random() * 100) + 1;


// if(randomNumber % 2 == 0){
//    console.log(" number is even: ");
// }else{
//     console.log("number is odd: ");
// }

// --------------- Day 3 -------------------

// function greet(name){ // Parameter
//     console.log("Hello there!" + name);
// }
// greet("subham"); //Arguments

// function add(a,b) {
//     return a + b;
// }
// let result = add(5,4);
// console.log(result);

// --- function expression 

// const sayHi = function(name){
//     console.log("Hey" + name);
// };

// sayHi("Subham");

// -------- Arrow Function(Modern syntax)


// const Multiply = (x,y)=>{ //shorter way to write function
//     return x * y;
// };

// console.log(Multiply(4,5));
// let n =4;
// const square = n => n*n;

// console.log(square(n));


//-------------> Scope: Global vs Local


// let globalVar = "I'am global";


// function showScope(){
//     let localVar = "I'am Local";
//     console.log(globalVar);
//     console.log(localVar);
// }
// showScope();
// console.log(globalVar);

// ---------------- Mini Project: Basics Calculator --------------------

// function add(a,b){
//     return a+b;
// }

// function subtract(a,b){
//     return a-b;
// }

// function Multiply(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return b!==0 ? a/b: "cannot divide by zero";
// }

// let num1 = parseFloat(prompt("Enter first number:"));
// let num2 = parseFloat(prompt("Enter second number:"));
// let operation = prompt("Choose operation: add, subtract, multiply, divide");

// let result;

// if(operation === "add"){
//     result =  add(num1,num2);
// }else if (operation === "subtract"){
//     result = subtract(num1,num2);
// }else if(operation==="multiply"){
//     result = Multiply(num1,num2);
// }else{
//     result = "Invalid operation!";
// }

// alert("Result:" + result);

// console.log(result);

// function greetMorning(name){
//     console.log("Good Morning" + name);
// }

// greetMorning("subham");

// ----------   convertTOFahrenheit(celsius) ------

// function convertTOFahrenheit(celsius){
//     return (celsius * 9/5) + 32;
// }

// let tempC = prompt("Enter temperature in celsius");
// let tempF = convertTOFahrenheit(tempC);

// console.log(tempC + "°C is " + tempF + "°F");


// function add(a,b){
//     return a+b;
// }

// const add = (a,b)=>{
//     a+b;
// }

// const subtract = (a,b)=>{
//     a-b;
// }

// const greet = (name) => "Hello, " + name + "!";
// const greet = (name) => {
//     console.log("Hello World!");
// }


// ------------- TOdoList--------------

// let todos = [];

// while (true) {
//   let action = prompt("Enter a command: add, remove, list, or quit").toLowerCase();

//   if (action === "add") {
//     let newTodo = prompt("Enter a new todo:");
//     todos.push(newTodo);
//     alert("Added: " + newTodo);
//   } else if (action === "remove") {
//     let index = parseInt(prompt("Enter index to remove (starting from 0):"));
//     if (index >= 0 && index < todos.length) {
//       let removed = todos.splice(index, 1);
//       alert("Removed: " + removed);
//     } else {
//       alert("Invalid index");
//     }
//   } else if (action === "list") {
//     let listString = "Your Todos:\n";
//     for (let i = 0; i < todos.length; i++) {
//       listString += i + ": " + todos[i] + "\n";
//     }
//     alert(listString);
//   } else if (action === "quit") {
//     alert("Goodbye!");
//     break;
//   } else {
//     alert("Invalid command.");
//   }
// }


// ----------------------- Number Guessing Game ------------------
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let guess;
// let count =0;

// while(guess !== randomNumber ) {
//     guess = parseInt(prompt("Guess a number between 1 to 100:"));
//     console.log(guess);
//     count ++;
//     if( guess === randomNumber){
//         alert(`correct the number was ${randomNumber}. you guess the number in ${count} tries `);
//         console.log(`correct the number was ${randomNumber}. you guess the number in ${count} tries `);
//         break;
//     }else if(guess<randomNumber){
//         alert(`Your guess is too Low! Try again`);
//     }else if(guess>randomNumber){
//         alert(`Your guess is too High! Try again`);
//     }else{
//         alert("Please Enter a valid number:");
//     }

// }


// ------------------- Day 5 --------------------
// objects and dom basics

// let person ={
//  name: "subham Sharma",
//  age : 21,
//  isStudent: true
// };

// person.age = 23;
// person.city = "Pune";
// delete person.isStudent;


// console.log(person.name);
// console.log(person["age"]);
// console.log(person);


// Nested Objects and Arrays

let student =  {
    name : "Subham",
    grades : [90,56,64],

    address: {
        city : "Patna",
        zip : "406654"
    }
};

console.log(student.grades[0]);
console.log(student.address.city);




