gsap.to("#line",{
    // duration:5,
    // opacity:0,
    // y:-300,
    duration:5,

    scrollTrigger:{
        scroller:"#page1",
        trigger:" #line",
        markers:  true,
        start:"90% 0%",
        // end:"bottom -1000%",
        scrub: true,
        // pin:true,
    }
})
// gsap.to("#line",{
//     opacity:0,
//     scrollTrigger:{
//         scroller:"#page2",
//         trigger:"#Line",
//         start:"top 10%",
//         markers:true,
//     }
// })