var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
});

// Select all interactive elements for the cursor hover effect
var interactiveElements = document.querySelectorAll(
    "#nav h4, .card, #footer h3"
);

interactiveElements.forEach(function (elem) {
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

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 75%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from("#green-section h2", {
    y: 50,
    scrollTrigger: {
        trigger: "#green-section",
        scroller: "body",
        start: "top 95%",
        end: "top 70%",
        scrub: 2,
    },
});

gsap.from("#footer", {
    y: -70,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        start: "top 98%",
        end: "top 90%",
        scrub: 2,
    },
});

// NEW CODE: "Back to Top" Button Functionality
const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
    // Show the button when user scrolls down 400px
    if (window.scrollY > 400) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

backToTopButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the link from changing the URL
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Animate the scroll smoothly
    });
});