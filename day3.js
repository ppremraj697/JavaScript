//FUNCTIONS

function testFunction(param1, param2) {
    console.log("Sum is :", param1 + param2);
}

testFunction(3, 4);
testFunction("Hello", " World");

function add(num1, num2) {
    return num1 + num2;
}

let ans = add(6, " World");
console.log(ans);

console.log("DataType of ans variable is :", typeof ans);//string

let sum = 0;

function addSum(num) {
    sum = sum + num;
}

console.log("Return value without return statement", addSum(3));

//CONDITIONALS AND COMPARISION OPERATORS

console.log(1 == 1);//true
console.log(1 == 2);//false
console.log(1 == "1");//true
console.log(4 === 4);//true
console.log(4 === "4");//false
console.log(4 != 5);//true
console.log(4 != 4);//false
console.log(4 != "5");//true
console.log(4 != "4");//false
console.log(4 !== 5);//true
console.log(4 !== 4);//false
console.log(4 !== "5");//true
console.log(4 !== "4");//false
console.log(4 > 5);//false
console.log(4 >= 5);//false
console.log(4 >= "4");//true
console.log("5" <= 6);//true

const num = 70;

//logical AND(&&)
if (num > 5 && num < 10) {
    return console.log("Yes");
}
else {
    return console.log("No");
}

