var active = 3;

var mnCircles = document.querySelectorAll(".miniCircle");
var sec = document.querySelectorAll(".second");

gsap.to(mnCircles[active - 1], {
    opacity: 0.5
})


gsap.to(sec[active - 1], {
    opacity: 1
})

mnCircles.forEach(function (val, index) {//ask about val
    val.addEventListener("click", function () {
        gsap.to("#circle", {
            rotate: (3 - (index + 1)) * 10,
            ease: Expo.easeInOut,
            duration: 1
        })
        greyOut();
        gsap.to(this, {
            opacity: 0.5
        })

        gsap.to(sec[index], {
            opacity: 1
        })
    })
})

function greyOut() {
    gsap.to(mnCircles, {
        opacity: 0.08
    })

    gsap.to(sec, {
        opacity: 0.4
    })
}

gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})