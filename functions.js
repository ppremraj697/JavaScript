//Function Statement
function displayName(name) {
    console.log("My name is", name);
}
displayName("Premraj");

//Function Expression
var greet = function (name) {
    console.log("Hello, " + name + "! How are you?")
}
greet("Premraj");

//Anonymous Function
setTimeout(function () {
    console.log("This is an anonymous function executed after a delay of 3 second.");
}, 3000)

//Arrow Function
const add = (a, b) => a + b;
console.log(add(4, 8));

//FIRST CLASS FUNCTIONS
// Assigning a function to a variable
// Passing a function as an argument
// Returning a function
// Stored in Data Structures

//HIGHER ORDER FUNCTIONS
// A function that returns a function or takes other functions as arguments is called a higher-order function.

//CALLBACK FUNCTION
// The function that we pass as an argument to another function is called a callback function.
