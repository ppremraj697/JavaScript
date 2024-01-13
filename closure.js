//CLOSURE IN JS : A CLOSURE in JS gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


//------------------------------------------------------LEXICAL SCOPING-----------------------------------------------------------------

function outer() {

    function innerZero() {
        console.log("username in innerZero() ", username);
    }
    innerZero();

    var username = "premraj697";//if let or const then innerZero() will throw ERROR else undefined

    // console.log("pass in outer() ", pass);      -------------> ERROR

    function innerOne() {
        console.log("username in innerOne() ", username);
        var pass = "user@123";
    }
    innerOne();

    function innerTwo() {
        console.log("username in innerTwo() ", username)
        // console.log("pass in innerTwo() ", pass)      -------------> ERROR
    }
    innerTwo();
}

outer();
// console.log(username);       --------------------> ERROR



//-------------------------------------------------------------------CLOSURE--------------------------------------------------------------

function myFxn() {

    let name = "Premraj";

    function displayName() {
        console.log("My name is ", name);
    }

    return displayName;//Lexical scope of displayName is returned here and not just execution context
}

let myName = myFxn();
myName();


// -------------------------------------------------------CLOSURE EXAMPLE---------------------------------------------------------------

let btns = document.getElementsByClassName("btn");

// let btnPressed = e => {

//     let currBtn = e.target.id;

//     let box = document.getElementById("closureImplementation");

//     box.addEventListener("click", function () {
//         box.style.backgroundColor = currBtn;
//     })
// }

for (let btn of btns) {
    // btn.addEventListener("click", btnPressed);

    // btn.addEventListener("click", (e) => {
    //     const result = clickHandler(e)
    //     result();
    // });

    btn.addEventListener("click", function(e){
        const result = clickHandler(e)
        result();
    });
}

function clickHandler(e) {

    let currBtn = e.target.id;

    return function () {
        let box = document.getElementById("closureImplementation");
        box.style.backgroundColor = currBtn;
    }
}