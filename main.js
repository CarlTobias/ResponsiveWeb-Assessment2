// I used a mix of .from() and scrollTrigger from the GSAP library to animate elements in HTML
// I also used different "ease" types and duration for variety

// .from() allowed me to select a target and animate it from a specific location
gsap.from("nav", {
    duration: 0.5, 
    opacity: 0, 
    y: -50, 
    ease: "power2.in", 

    // scrollTrigger allows me to time it according to the user's place in the website
    scrollTrigger: {
        trigger: "nav", 
        start: "top center", 
        end: "bottom center", 
        toggleActions: "play none none reverse"
    }
});

gsap.from(".hotItems", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",

    scrollTrigger: {
        trigger: ".hotItems",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from("article h1", {
    duration: 0.5,
    opacity: 0,
    y: 50,
    ease: "circ.in",

    scrollTrigger: {
        trigger: "article",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from("h3", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "circ.in",

    scrollTrigger: {
        trigger: "h3",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".separator", {
    duration: 1.2,
    opacity: 0, 
    ease: "expo.in",

    scrollTrigger: {
        trigger: ".separator",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".item", {
    duration: 1.5,
    opacity: 0,
    y: -100,
    stagger: 0.2, 
    ease: "elastic.out",

    scrollTrigger: {
        trigger: ".item",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".comingSoon h2", {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    ease: "expo.in",

    scrollTrigger: {
        trigger: ".comingSoon",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});