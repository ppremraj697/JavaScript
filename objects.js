// non-primitive datatype that stores key:value pairs

// An object is a collection of related data or functionality.These usually consist of several variables and functions(which are called properties and methods when they are inside objects).

// All JavaScript objects have a toString() method.

var newObj = {} //blank object

//Syntax of Object

var student = {
    //properties
    name: "Premraj",
    college: "DYPIEMR",
    "branch name": "Computer Engineering",
    div: "A",
    rollNo: 20166,
    location: "Pune",
    hasGF: null,
    //method
    displayName: function () {
        console.log(this.name);
    }
}

//Adding new field and method to object
student.isBrave = true;
student.detailedBio = function () {
    console.log(this.name, " is student at ", this.college);
}


//Accessing the object's field
student.displayName();
console.log(student.college);
console.log(student["branch name"]);
// console.log(rollNumber); //--------------------> ERROR: Not Defined
const rollNumber = "rollNo";
console.log(student[rollNumber]);


//Methods on Objects
console.log(student.hasOwnProperty("location"))
console.log(Object.keys(student));
console.log(Object.values(student));