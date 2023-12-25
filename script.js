
//cursor moving code
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});

//code for cursor when goes in navbar then cursor will bigger and chnage the color
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

//when body scroll down then navbar size reduced and background color will become black
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        //markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})

//when body scroll down to the bottom then video will be invisible
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -90%",
        scrub: 2
    }
})

//body move down then about us section goes upward in some seconds
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        //markers:true,
        start: "top 60%",
        end: "top 50%",
        scrub: 1
    }
})

//cards will shown after some secs
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        //markers:true,
        start: "top 60%",
        end: "top 60%",
        scrub: 2
    }
})


//colon moving towards the text
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        //markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});


//colon2 moving towards the text
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        //markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 2,
    },
});