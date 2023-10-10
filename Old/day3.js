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

// console.log(1 == 1);//true
// console.log(1 == 2);//false
// console.log(1 == "1");//true
// console.log(4 === 4);//true
// console.log(4 === "4");//false
// console.log(4 != 5);//true
// console.log(4 != 4);//false
// console.log(4 != "5");//true
// console.log(4 != "4");//false
// console.log(4 !== 5);//true
// console.log(4 !== 4);//false
// console.log(4 !== "5");//true
// console.log(4 !== "4");//false
// console.log(4 > 5);//false
// console.log(4 >= 5);//false
// console.log(4 >= "4");//true
// console.log("5" <= 6);//true

const num = 70;

function checkNum(num) {
    //Logical AND(&&)
    if (num > 5 && num < 10) {
        return "Between 5 and 10";
    }
    //Logical OR(||)
    else if (num < 5 || num > 10) {
        return "Less than 5 or greater than 10";
    }
}

console.log(checkNum(100));

//Switch Statement

const val = 3;

switch (val) {
    case 1:
        console.log("This is one");
        break;
    case 2:
        console.log("This is two");
        break;
    default:
        console.log("This is default case");
        break;
}

