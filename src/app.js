import {gsap, Expo, Back} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// import {Expo, Back} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);



// #######################################-- Start --#######################################

window.onload = () => {

   const tlStart = gsap.timeline({onComplete : ()=> {
        // gsap.to("html", {overflowY : "auto"})
    }})
    // .from(".start_container h1", {autoAlpha : 0, duration : 3}, "+=0.5")
    // .to(".start_container", {autoAlpha : 0, duration : 2}, "+=1")
    // .to(".start_container h1", {autoAlpha : 0, duration : 1, transform : "scale(5)"}, "-=2")
    .from(".landing_container", {autoAlpha : 0, duration : 0.5})
    .from(".landing_left_box span", {
        duration :0.4,
        stagger : 0.2,
        autoAlpha : 0,
        y : -50,
        ease : "expo.out",
        scale : 2,
    })

    .from(".containerCube", {autoAlpha: 0, x : 200, duration : 2, ease  : Expo.out})
    .from(".landing_left_box p", {x : -100, autoAlpha : 0, duration : 2, ease : Expo.out}, "-=1")
//onComplete tlCube.play()
}



// Animation du cube

gsap.set(".containerCube", {perspective : "1000px"})

gsap.set(".cube" , {transformStyle : "preserve-3d"})

gsap.set(".faceTop",{rotateX : "90deg" , transform : "translateZ(100px)"})

const tlCube = gsap.timeline({defaults : {duration : 5, ease : Expo.out}})
    .fromTo(".faceTop",{rotateX : "90deg" , transform : "translateZ(100px)"}, {z : "200px"}, 0)
    .fromTo(".faceBottom",{rotateX : "-90deg" , z : 100}, {z : 200}, 0)
    .fromTo(".faceRight",{rotateY : "90deg" , z : 100} , {z : 200}, 0)
    .fromTo(".faceLeft", {rotateY : "-90deg" , z : 100}, {z : 200}, 0)
    .fromTo(".faceFront ",{rotateX : "0deg" , z : 100}, {z :200}, 0)
    .fromTo(".faceBack",{rotateX : "-180deg" , z : 100}, {z : 200}, 0)

    // .to(".faceTop",{transform : "rotateX(90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    // .to(".faceBottom",{transform : "rotateX(-90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    // .to(".faceRight",{transform : "rotateY(90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    // .to(".faceLeft", {transform : "rotateY(-90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    // .to(".faceFront ",{transform : "rotateX(0deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    // .to(".faceBack",{transform : "rotateX(-180deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)


// animation au scroll de la landingPage

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing_container",
            start: "top top",
            end: "bottom top",
            scrub: true,
        onLeaveBack : ()=> tlCube.play(),
        }
    })
    .to([".landing_left_box", ".landing_right_box"], {
        yPercent : 30,
        scale : 0.8, 
        onStart : ()=> tlCube.reverse(),
    }, 0)

    gsap.to(".landing_container", {autoAlpha : 0, scrollTrigger : {
        trigger : ".landing_container",
        start : "center top",
        scrub : true,
        ease : Expo.in
    }})


// #######################################-- Presentation --#######################################

    gsap.from(".presentation h1", {
        transform : "scale(0.2)",
        x : -900,
        // y : 200,
        autoAlpha : 0,
        ease : Expo.out,
        scrollTrigger : {
            trigger : ".presentation",
            start : "top bottom",
            // end : "bottom center",
            scrub : true,
            // markers : true,
        }
    })

    gsap.from(".presentation p", {
        autoAlpha : 0,
        // transform :"scaleY(0)",
        // transformOrigin : "top",
        // transform : "scaleY(0.5)",
        // transformOrigin : "top",
        scrollTrigger :{
        trigger : ".presentation p",
        scrub : true,
        start : "top bottom" ,
        end :"top center",
        } 
    })

// #######################################-- Parcour --#######################################

    //rotation for set the back card in the back
    gsap.set(".card_box_back", {rotateY : "180deg"})


    // Animation for the title

    gsap.from(".parcour h1", {
        scale : 0.5,
        autoAlpha :0,
        x : 500,
        // y : 200,
        ease : Expo.out,
        scrollTrigger : {
            trigger : ".svg1",
            start : "top bottom",
            end : "bottom center-=10%",
            scrub : true,
        }
    })
   

    // Animation for the stroke

    const tlParcourLigne = gsap.timeline({
        scrollTrigger : {
            trigger : ".parcour",
            scrub : 0.5,
            // markers : true,
            start : "top+=20% bottom",
            end : "bottom bottom+=40%",
        },
    })
        .from(".ligne1 rect", {scale : 0, stagger : 0.5,
     onComplete : ()=> gsapLigne2.play()
    })
    .from(".ligne3 rect", {scale : 0, stagger : 0.5,
    onComplete :  ()=> gsapLigne4.play(),
    onReverseComplete : ()=>{
        gsapLigne2.timeScale(3)
        gsapLigne2.reverse()
    } 
    })
    .from(".ligne5 rect", {scale : 0, stagger : 0.5,
    onReverseComplete : ()=>{
        gsapLigne4.timeScale(3)
        gsapLigne4.reverse()
    }
    })

    const gsapLigne2  = gsap.from(".ligne2 rect", {
        scale : 0, 
        transformOrigin : "right",
        stagger : {amount : 0.5, from : "center"},
        paused : true,
        onStart : ()=> {
            gsapCard1.timeScale(1)
            gsapCard2.timeScale(1)
            gsapCard1.play()
            gsapCard2.play()
        },
        onReverseComplete : ()=> {
            gsapCard1.timeScale(3)
            gsapCard2.timeScale(3)
            gsapCard1.reverse()
            gsapCard2.reverse()
        }
    })

    const gsapLigne4  = gsap.from(".ligne4 rect", {
        scale : 0, 
        transformOrigin : "right",
        stagger : {amount : 0.5, from : "center"},
        paused : true,
        onStart : ()=> {
            gsapCard4.timeScale(1)
            gsapCard5.timeScale(1)
            gsapCard4.play()
            gsapCard5.play()
        },
        onReverseComplete : ()=> {
            gsapCard4.timeScale(3)
            gsapCard5.timeScale(3)
            gsapCard4.reverse()
            gsapCard5.reverse()
        }
    })

    // Animation for the graphique 

    const graph1 = gsap.timeline({paused : true,})
    .from(".circleBox1", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique1 span", {autoAlpha : 0, scale : 0, duration : 1, ease : Back.easeOut}, 1)


    const graph2 = gsap.timeline({paused : true})
    .from(".circleBox2", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique2 span", {autoAlpha : 0, scale : 0, duration : 1, ease : Back.easeOut}, 1)


    const graph3 = gsap.timeline({paused : true})
    .from(".circleBox3", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique3 span", {autoAlpha : 0, scale : 0, duration : 1, ease : Back.easeOut}, 1)


    const graph4 = gsap.timeline({paused : true})
    .from(".circleBox4", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique4 span", {autoAlpha : 0, scale : 0, duration : 1, ease : Back.easeOut}, 1)


    const graph5 = gsap.timeline({paused : true})
    .from(".circleBox5", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique5 span", {autoAlpha : 0, scale : 0, duration : 1, ease : Back.easeOut}, 1)


    const graph6 = gsap.timeline({paused : true})
    .from(".circleBox6", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique6 span", {autoAlpha : 0, scale : 0, duration : 1, ease : Back.easeOut}, 1)





    //Animation for the Card

    const gsapCard1 = gsap.from(".card_1", 
    {
        autoAlpha : 0,
        x : -300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph1.play(),
    })

    const gsapCard2 = gsap.from(".card_2", {
        delay : 0.3,
        autoAlpha : 0,
        x : 300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph2.play(),
    })

    const gsapCard4 = gsap.from(".card_4", {
        delay : 0.3,
        autoAlpha : 0,
        x : -300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph4.play(),

    })
 
    const gsapCard5 = gsap.from(".card_5", {
        autoAlpha : 0,
        x : 300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph5.play(),
    
    })
    
    const gsapCard3 = gsap.from(".card_3", {
        scale : 0, 
        onStart : ()=> graph3.play(),
        scrollTrigger : {
            trigger : ".card_3",
            scrub : 0.5,
            end : "center center"
        }
    })

    const gsapCard6 = gsap.from(".card_6", {
        y : 200,
        autoAlpha : 0,
        duration : 1.5,
        onStart : ()=> graph6.play(),
        scrollTrigger : {
            trigger : ".card_6",
            scrub : true,
            start : "top bottom-=10%",
            end : "center center+=35%",
        }
    })


    

    //Function to set the card in the good place

    function getBoxPosition (svg , box) {
        const ligne = document.querySelector(svg);
        const ligne_X = ligne.offsetLeft;
        const ligne_Y = ligne.offsetTop;
        const ligne_H = ligne.offsetHeight
    
        const card = document.querySelector(box);
        const box_W = card.offsetWidth;
        const box_H = card.offsetHeight;

        return {x : ligne_X, y : ligne_Y , w : box_W, h : box_H, lH : ligne_H}
    }

    const dataBox1  = getBoxPosition(".svg2", ".card_1")
    const dataBox2  = getBoxPosition(".svg2", ".card_2")
    const dataBox3  = getBoxPosition(".svg3", ".card_3")
    const dataBox4  = getBoxPosition(".svg4", ".card_4")
    const dataBox5  = getBoxPosition(".svg4", ".card_5")
    const dataBox6  = getBoxPosition(".svg5", ".card_6")

    gsap.set(".card_1", {left : dataBox1.x - dataBox1.w, top : dataBox1.y - (dataBox1.h / 2)})
    gsap.set(".card_2", {right : dataBox2.x - dataBox2.w, top : dataBox2.y - (dataBox2.h / 2)})
    gsap.set(".card_3", {left : (dataBox3.x - (dataBox3.w / 2) + 3.5), top :(dataBox3.y + (dataBox3.lH / 2) - (dataBox3.h / 2) )})
    gsap.set(".card_4", {left : dataBox4.x - dataBox4.w, top : dataBox4.y - (dataBox4.h / 2)})
    gsap.set(".card_5", {right : dataBox5.x - dataBox5.w, top : dataBox5.y - (dataBox5.h / 2)})
    gsap.set(".card_6", {left : (dataBox6.x - (dataBox6.w / 2) + 3.5), top : dataBox6.y + dataBox6.lH})


    // Animate rotation on click for the card

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const cardContent = card.firstElementChild;
        card.addEventListener("click", ()=> {
            if(card.classList.contains("active")){
                gsap.to(cardContent, {rotateY : "360deg", duration : 1, ease : Back.easeIn.config(1)})
                card.classList.remove("active")
            }else{
                card.classList.add("active")
                gsap.to(cardContent, {rotateY : "180deg", duration : 2,ease: Back.easeOut.config(1)})
            }
        })
    })
    
// #######################################-- Hobbies --#######################################

    gsap.set(".hobbie", {yPercent : -50, xPercent : -50})

// Title Animation

gsap.from(".hobbies_container h1", {
    transform : "scale(0.2)",
    y : 200,
    ease : "expo.out",
    scrollTrigger : {
        trigger : ".hobbies_container",
        start : "top bottom",
        end : "bottom center",
        scrub : true,
        // markers : true,
    }
})


// Txt Animation

function toggleZindex (element){
    const index = gsap.getProperty(element , "zIndex")
     if(index === 0){
         gsap.set(element, {zIndex : 100})
     }else {
         gsap.set(element, {zIndex : 0})
     }
}
const txtsData = [];
const txts = document.querySelectorAll(".txt").forEach(txt => {
    txtsData.push(txt.offsetWidth)
})
console.log(txtsData);

gsap.set(".txt", {autoAlpha : 0})

const setTxt = gsap.timeline({paused : true, defaults : {ease : "none", duration : 10, onRepeat :toggleZindex, repeat : -1}})
.fromTo(".txt1", {xPercent : -100, zIndex : 0, autoAlpha : 0},{autoAlpha :0, xPercent : 130,onRepeatParams: [".txt1"]},5)
.to(".txt1" , {autoAlpha : 1, duration : 5 ,yoyo : true},5) //warning console

.fromTo(".txt2", {xPercent : 130, zIndex : 100},{xPercent : -100, onRepeatParams : [".txt2"]},3) 
.to(".txt2" , {autoAlpha : 1, duration : 5 ,yoyo : true},3)//warning console

.fromTo(".txt3", {xPercent : -100, zIndex : 0},{xPercent : 130, onRepeatParams : [".txt3"]},0) 
.to(".txt3" , {autoAlpha : 1, duration : 5 ,yoyo : true},0) //warning console

.fromTo(".txt4", {xPercent : 130, zIndex : 100},{xPercent : -100, onRepeatParams : [".txt4"]},4) 
.to(".txt4" , {autoAlpha : 1, duration : 5 ,yoyo : true},4) //warning console

.fromTo(".txt5", {xPercent : -100, zIndex :0},{xPercent : 130, onRepeatParams : [".txt5"]},6) 
.to(".txt5" , {autoAlpha : 1, duration : 5 ,yoyo : true},6) //warning console

.fromTo(".txt6", {xPercent : 130, zIndex : 100},{xPercent : -100, onRepeatParams : [".txt6"]},10) 
.to(".txt6" , {autoAlpha : 1, duration : 5 ,yoyo : true},10) //warning console



// Pictures animation

const setImgs = gsap.timeline({scrollTrigger : {
    trigger : ".hobbies_content",
    scrub : true,
    start : "top-=30% center",
    end : "bottom-=10% center",
    markers : true,
}, defaults : {ease : Expo.Out, duration : 2},
    onStart : ()=> setTxt.play(),
    // onReverseComplete : ()=>{
    //     setTxt.time(0)
    //     setTxt.pause()
    // } 
},)
.fromTo(".hobbie1", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "15%", left : "20%"}, 0)
.fromTo(".hobbie2", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "60%", left : "20%"}, 0)
.fromTo(".hobbie3", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "20%", left : "80%"}, 0)
.fromTo(".hobbie4", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "65%", left : "83%"}, 0)
.fromTo(".hobbie5", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "100%", left : "50%"}, 0)
.fromTo(".hobbie6", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50, scale : 0.5},{yPercent : -50 , xPercent : -50, scale : 1.2}, 0)

