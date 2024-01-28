//Reverse String
function reverseString(str) {
    var newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("Greetings from Premraj"));

//Factorialize a Number
function factorialize(num) {
    if (num === 0) {
        return 1;
    }

    for (let i = num - 1; i > 0; i--) {
        num *= i
    }
    return num;
}
console.log(factorialize(5));

//Find the Longest Word in a String
function findLongestWordLength(str) {

    let wordLen = 0;
    let len = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            wordLen += 1;
        }
        else {
            if (wordLen > len) {
                len = wordLen;
            }
            wordLen = 0;
        }
    }

    if (wordLen > len) {
        len = wordLen
    }

    return len;
}
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

//Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = ((9 / 5) * celsius) + 32;
    console.log(fahrenheit)
    return fahrenheit;
}
console.log(convertCtoF(30));

//Return Largest Numbers in Arrays
function largestOfNestedArr(arr) {

    let mappedArr = arr.map((subArr) => {

        let largestElem = Number.MIN_SAFE_INTEGER
        for (let i = 0; i < subArr.length; i++) {
            if (subArr[i] > largestElem) {
                largestElem = subArr[i]
            }
        }
        return largestElem;
    })

    return mappedArr;
}
console.log(largestOfNestedArr([[4, 150, 1, 30, 42, 58], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [23, 45, 21]]));