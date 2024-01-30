//Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
const myDetails = {
    name: "Premraj",
    college: "DYPIEMR",
    location: "Pune",
    isBrave: true,
    age: 23,
    gender: "Male"
}

let { name: userName, age, gender } = myDetails

console.log(userName);
console.log(gender);
console.log(age);

//Destructuring Nested Objects
const Student = {
    Premraj: {
        lastName: "Patil",
        dist: "Nandurbar"
    },
    Aniket: {
        lastName: "Tarale",
        dist: "Buldhana"
    },
    Adarsh: {
        lastName: "Dhangar",
        dist: "Dhule"
    }
}

const { Aniket: { lastName, dist } } = Student
console.log(lastName, dist);

const { Premraj: { lastName: premrajLastName, dist: premrajDist } } = Student
console.log(premrajLastName, premrajDist);

//Destructuring Assignments to swap two variables
let a = 8, b = 6;
console.log(a, b);
[a, b] = [b, a]
console.log(a, b);

// Destructuring via rest operator
function removeFirstTwo(list) {
    let [, , ...srcWithoutFirstTwo] = list
    return srcWithoutFirstTwo;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats));

//Alternate Syntax
const half2 = ({ max, min } = stats) => (max + min) / 2.0;
console.log(half2());