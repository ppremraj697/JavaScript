//FIRST CLASS FUNCTIONS

// Assigning a function to a variable(var, let const)
var fxn = function displayName(){
    console.log("My name is Premraj")
}

// Passing a function as an argument
function sum(val1, val2, displaySum){
    displaySum(val1, val2);
}

function displaySum(val1, val2 ){
    console.log(val1 + val2)
}

sum(10, 20, displaySum);


// Returning a function
// Stored in Data Structures

