// non-primitive datatype that stores key:value pairs

// An object is a collection of related data or functionality.These usually consist of several variables and functions(which are called properties and methods when they are inside objects).

var newObj = {} //blank object

//Syntax of Object

var student = {
    //properties
    name: "Premraj",
    college: "DYPIEMR",
    "branch name": "Computer Engineering",
    div: "A",
    rollNo: 20166,
    isBrave: true,
    location: "Pune",
    hasGF: null,
    //method
    displayName: function () {
        console.log(this.name);
    }
}

//Accessing the object's field
student.displayName();
console.log(student.college);
console.log(student["branch name"]);