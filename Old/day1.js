//This is inline comment
/*
This is my first javascript program/code
This is multi-line code
*/

console.log("Hello World");

var a = 5;//storing value in a variable
console.log(a);
var myName ="Premraj Patil";//string literal

/*
declaring variable with the var keyword is that you can easily overwrite variable declaration. 
Console don't fetch error.

let keyword solves this potential issue is JS introduced in ES6(major update)
If we replace var with let in code it results in an error in browser console if we try to override

const has all features of let along that they are Read-only variable. If we try to reassign a const variable
console will display error.
*/
var a =4 ;
console.log(a);

let x = 39;
console.log(x); 

/*
operators : + - * / % ++ -- += -= *= 
/=  is known as compound assignment with augmented division
*/