
var r = gsap.timeline()

r.from("#nav h1,#nav h4",{

    opacity:0,
    y:-30,
    delay:.4,
    duration:.3,
    stagger:.3
})

gsap.from("#center h1",{
    opacity:0,
    x:-50,
    delay:.3,
    duration:1,
    stagger:.5,
})
gsap.from("img",{
    opacity:0,
    x:90,
    delay:1,
    stagger:.3,
})

r.from("#tap h1,#tap h4",{

    opacity:0,
    y:30,
    delay:.4,
    duration:.5,
    stagger:.3
})
