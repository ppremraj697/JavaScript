// Hoisting in JS : Refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes or imports to the top of their scope, prior to execution of code

//let and const are hoisted in Temporal Dead Zone

//Temporal Dead Zone : A specific period in the execution of JS code where variables declared with let and const exist but cannot be accessed or assigned any value.

console.log(a)
// console.log(b) ----->ReferenceError: Cannot access 'b' before initialization
// console.log(c)
console.log(demo)
demo();
// greet(); ----->Type Error : greet() is not a function.
// greetPremraj();

var a = 10;
let b = 20;
const c = 30;

function demo() {
    console.log("Heyy there...")
}

var greet = () => {
    console.log("Good Morning to everyone...")
}
var greetPremraj = function () {
    console.log("Good Morning Premraj...")
}
