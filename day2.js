//Strings

const sampleStr = "Premraj is learning JavaScript";
console.log(sampleStr);

/*
Escape Characters
1. \'
1. \"
1. \\
1. \n
1. \tab
1. \r = carriage return
1. \b = word boundary
1. \f = form feed
*/

const strAdd = " and also DSA Parallely.";
const newStr = sampleStr + strAdd;
console.log(newStr);

// += is used append variables to a string

console.log(sampleStr.length);//retruns length = 30 //0-based indexing to access charatcter from array 
console.log(sampleStr[23]);

//string values are immutable but can br re-assigned

const fourthLastLetter = sampleStr[sampleStr.length - 4]; //4th last character in string
console.log(fourthLastLetter);

//Arrays

const sampleArr = ["Premraj", 5, "Rohit", "Sarang", 78];
console.log(sampleArr);

//arrays are mutable and data can be accessed using indices
//multi-dimentional array

const multiDimArr = [
    [1, 2, 3],
    [[10, 11, 12], 13, 14],
    [[22, 34, 53], "Premraj", "Patil"]
];

console.log(multiDimArr[2][1]);

sampleArr.push(1, "Patil", 3);
sampleArr.pop();
console.log(sampleArr);

sampleArr.shift();//remove first element
sampleArr.unshift("Karan", "Pandhare");//add in beginning
console.log(sampleArr);
