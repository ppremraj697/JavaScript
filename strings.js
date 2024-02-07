let str = "My name is Premraj Patil"

console.log(str.length)

//3 methods for extracting string characters

let char1 = str.at(0)
let char2 = str.charAt(1)
let char3 = str[3]

console.log(char1, char2, char3)

// There are 3 methods for extracting a part of a string: substr(start, length) is deprecated

let substr1 = str.slice(0, 2)
let substr2 = str.substring(2, 7)

console.log(substr1, substr2)