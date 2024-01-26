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
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");