let div1 = document.getElementById("eventBubbling")
let div2 = document.getElementById("ebDiv1");
let div3 = document.getElementById("ebDiv2");

div1.addEventListener("click", function () {
    // div1.style.backgroundColor = "blue";
    alert("Heyy... from div1")
})

div2.addEventListener("click", function () {
    // div2.style.backgroundColor = "green"
    alert("Heyy... from div2")
})

div3.addEventListener("click", function () {
    // div3.style.backgroundColor = "red"
    alert("Heyy... from div3")
})

// --------------------Event Capturing---------------------

let div4 = document.getElementById("eventCapturing")
let div5 = document.getElementById("ecDiv1");
let div6 = document.getElementById("ecDiv1");

div4.addEventListener("click", function () {
    // div4.style.backgroundColor = "blue";
    alert("Heyy... from div4")
}, true)

div5.addEventListener("click", function () {
    // div5.style.backgroundColor = "green"
    alert("Heyy... from div5")
}, true)

div6.addEventListener("click", function () {
    // div6.style.backgroundColor = "red"
    alert("Heyy... from div6")
})