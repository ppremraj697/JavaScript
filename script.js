//JS for ColorAnimationJS

var rect = document.querySelector("#colorAnimationJS");

rect.addEventListener("mousemove", function (details) {
    var rectangleLocation = rect.getBoundingClientRect();//gives us the location of "rect" element

    var insideRectCoordinate = details.clientX - rectangleLocation.left;

    if (insideRectCoordinate < rectangleLocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectCoordinate);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        });
    }
    else {
        var blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideRectCoordinate);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
        });
    }
})

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white"
    });
});