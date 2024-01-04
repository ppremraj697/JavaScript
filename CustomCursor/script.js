var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
    /* 
    Below line prints object named "MouseMove" on the console.
    Prints details associated with the mousemove event whenever mouse is moved
    console.log(dets);

    Prints x and y co-ordinate of the cursor 
    console.log(dets.x, dets.y);
    */

    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})

