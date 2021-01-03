

window.onload = () => {
    tlStart = gsap.timeline({onComplete : ()=> tlInitCube.play()})
    .from(".start_container h1", {autoAlpha : 0, duration : 3}, "+=0.5")
    .to(".start_container", {autoAlpha : 0, duration : 2}, "+=1")
    .to(".start_container h1", {autoAlpha : 0, duration : 1, transform : "scale(5)"}, "-=2")
    .from(".landing_container", {autoAlpha : 0, duration : 0.5})
    .from(".left_box span", {
        duration :0.4,
        stagger : 0.2,
        autoAlpha : 0,
        y : -50,
        ease : "expo.out",
        transform : "scale(2)"
    })

    .from(".containerCube", {autoAlpha:0, x : 200, duration : 2, ease  : "expo.out"})
    .from(".left_box p", {x : -100, autoAlpha : 0, duration : 2, ease : "expo.out"})

    tlInitCube = gsap.timeline({paused : true})
    .to(".faceTop",{transform : "rotateX(90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceBottom",{transform : "rotateX(-90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceRight",{transform : "rotateY(90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceLeft", {transform : "rotateY(-90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceFront ",{transform : "rotateX(0deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceBack",{transform : "rotateX(-180deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
//     tlExploseCube = gsap.timeline()
//     .fromTo(".faceTop", {transform : "rotateX(90deg) translateZ(200px)"}, {transform : "rotateX(90) translateZ(200px)"})
//     .fromTo(".faceBottom",{transform : "rotateX(-90deg) translateZ(200px)"}, {transform : "rotateX(90) translateZ(200px)"})
//     .fromTo(".faceRight",  {transform : "rotateY(90deg) translateZ(200px)"}, {transform : "rotateX(90) translateZ(200px)"})
//     .fromTo(".faceLeft", {transform : "rotateY(-90deg) translateZ(200px)"}, {transform : "rotateX(90) translateZ(200px)"})
//     .fromTo(".faceFront ",{transform : "rotateX(0deg) translateZ(200px)"}, {transform : "rotateX(90) translateZ(200px)"})
//     .fromTo(".faceBack", {transform : "rotateX(-180deg) translateZ(200px)"}, {transform : "rotateX(90) translateZ(200px)"})
}


