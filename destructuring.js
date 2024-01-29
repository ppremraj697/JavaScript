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
