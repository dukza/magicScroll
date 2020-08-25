

$(function(){

    let controller = new ScrollMagic.Controller(),
        el = $(".work-section"),
        workCon = el.find(".work-con"),
        t1 = gsap.timeline();
        t1
            // .from(workCon, 0.5, { autoAlpha: 0, opacity: 0, y: '-100%', ease: Linear.easeNone }, '-=1.5')
        // .set(el, 1, { y: '-100%', opacity: 0},{ y: '0%', opacity: 1, autoAlpha: 0, ease: Power0.easeNone }, "start")
            .staggerTo(workCon, 1, { y: '-100%', autoAlpha: 0, ease: Power0.easeNone , onComplete:myFunction()})
            // .fromTo(el, 1.5, {"transform": "translateY(100px)", "opacity": "0", ease: Linear.easeNone}, 
            // {"transform": "translateY(0px)", "opacity": "1", ease: Linear.easeNone}, '1' );

    function myFunction() {
        console.log("tween finished");
    }
    let scene = new ScrollMagic.Scene({
        triggerElement: el,
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
        .setTween(t1)
        .setPin(".work-section")
        .addTo(controller);

    // $(el).each(function(){


    // })



            // .staggerFrom('.section', 1, { y: '100%', autoAlpha: 0, ease: Power0.easeNone }, "1")
            // .staggerTo(el, 1, { y: '-100%', autoAlpha: 0, ease: Power0.easeNone }, "1");

    // el.each(function(){
    //     $(this)
    //         .set('.section', { y: '100%'})
    //         // .staggerFrom('.section', 1, { y: '100%', autoAlpha: 0, ease: Power0.easeNone }, "1")
    //         .staggerTo(el, 1, { y: '-100%', autoAlpha: 0, ease: Power0.easeNone }, "1");            
    // })



    //     let controller = new ScrollMagic.Controller(),
    //     el = $(".work-section .work-con"),
    //     t1 = gsap.timeline();
    //     t1
    //         .fromTo(el, { y: '200%',opacity:0}, { y: '0%', opacity:1, ease: Power0.easeNone}, "2")
    //         // .staggerFrom('.section', 1, { y: '100%', autoAlpha: 0, ease: Power0.easeNone }, "1")
    //         // .staggerTo(el, 1, { y: '-100%', autoAlpha: 0, ease: Power0.easeNone }, "1");

    // // el.each(function(){
    // //     $(this)
    // //         .set('.section', { y: '100%'})
    // //         // .staggerFrom('.section', 1, { y: '100%', autoAlpha: 0, ease: Power0.easeNone }, "1")
    // //         .staggerTo(el, 1, { y: '-100%', autoAlpha: 0, ease: Power0.easeNone }, "1");            
    // // })

    // let scene = new ScrollMagic.Scene({
    //     triggerElement: el,
    //     duration: '100%',
    //     triggerHook: 0,
    //     offset: '300'
    // })
    //     .setTween(t1)
    //     .setPin(".work-section")
    //     .addTo(controller);


})

