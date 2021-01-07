gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);


// #######################################-- Start --#######################################

window.onload = () => {

    tlStart = gsap.timeline({onComplete : ()=> {
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
        transform : "scale(2)"
    })

    .from(".containerCube", {autoAlpha:0, x : 200, duration : 2, ease  : "expo.out"})
    .from(".landing_left_box p", {x : -100, autoAlpha : 0, duration : 2, ease : "expo.out", onComplete : ()=> tlCube.play()}, "-=1")

}



// Animation du cube

tlCube = gsap.timeline({paused : true})
    .to(".faceTop",{transform : "rotateX(90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceBottom",{transform : "rotateX(-90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceRight",{transform : "rotateY(90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceLeft", {transform : "rotateY(-90deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceFront ",{transform : "rotateX(0deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)
    .to(".faceBack",{transform : "rotateX(-180deg) translateZ(200px)", duration : 0.8 ,ease : "expo.out" }, 0)


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
        transform : "scale(0.8)", 
        onStart : ()=> tlCube.reverse(),
    }, 0)

    gsap.to(".landing_container", {opacity : 0, scrollTrigger : {
        trigger : ".landing_container",
        start : "center top",
        scrub : true,
        ease : "expo.in"
    }})


// #######################################-- Presentation --#######################################

    gsap.from(".presentation h1", {
        transform : "scale(0.2)",
        x : -900,
        // y : 200,
        ease : "expo.out",
        scrollTrigger : {
            trigger : ".presentation",
            start : "top bottom",
            // end : "bottom center",
            scrub : true,
            // markers : true,
        }
    })

    gsap.from(".presentation p", {
        opacity : 0,
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
        transform : "scale(0.5)",
        opacity :0,
        x : 500,
        // y : 200,
        ease : "expo.out",
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
        .from(".ligne1 rect", {transform : "scale(0)", stagger : 0.5,
     onComplete : ()=> gsapLigne2.play()
    })
    .from(".ligne3 rect", {transform : "scale(0)", stagger : 0.5,
    onComplete :  ()=> gsapLigne4.play(),
    onReverseComplete : ()=>{
        gsapLigne2.timeScale(3)
        gsapLigne2.reverse()
    } 
    })
    .from(".ligne5 rect", {transform : "scale(0)", stagger : 0.5,
    onReverseComplete : ()=>{
        gsapLigne4.timeScale(3)
        gsapLigne4.reverse()
    }
    })

    const gsapLigne2  = gsap.from(".ligne2 rect", {
        transform : "scale(0)", 
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
        transform : "scaleX(0)", 
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


    //Animation for the Card

    const gsapCard1 = gsap.from(".card_1", 
    {
        opacity : 0,
        x : -300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph1.play(),
    })

    const gsapCard2 = gsap.from(".card_2", {
        delay : 0.3,
        opacity : 0,
        x : 300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph2.play(),
    })

    const gsapCard4 = gsap.from(".card_4", {
        delay : 0.3,
        opacity : 0,
        x : -300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph4.play(),

    })
 
    const gsapCard5 = gsap.from(".card_5", {
        opacity : 0,
        x : 300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph5.play(),
    
    })
    
    const gsapCard3 = gsap.from(".card_3", {
        transform : "scale(0)", 
        onStart : ()=> graph3.play(),
        scrollTrigger : {
            trigger : ".card_3",
            scrub : true,
            end : "center center"
        }
    })

    const gsapCard6 = gsap.from(".card_6", {
        y : 200,
        opacity : 0,
        duration : 1.5,
        onStart : ()=> graph6.play(),
        scrollTrigger : {
            trigger : ".card_6",
            scrub : true,
            start : "top bottom-=10%",
            end : "center center+=35%",
        }
    })


    // Animation for the graphique 

    const graph1 = gsap.timeline({paused : true,})
    .from(".circleBox1", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique1 span", {opacity : 0, transform : "scale(0)", duration : 1, ease : "Back.easeOut"}, 1)


    const graph2 = gsap.timeline({paused : true})
    .from(".circleBox2", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique2 span", {opacity : 0, transform : "scale(0)", duration : 1, ease : "Back.easeOut"}, 1)


    const graph3 = gsap.timeline({paused : true})
    .from(".circleBox3", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique3 span", {opacity : 0, transform : "scale(0)", duration : 1, ease : "Back.easeOut"}, 1)


    const graph4 = gsap.timeline({paused : true})
    .from(".circleBox4", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique4 span", {opacity : 0, transform : "scale(0)", duration : 1, ease : "Back.easeOut"}, 1)


    const graph5 = gsap.timeline({paused : true})
    .from(".circleBox5", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique5 span", {opacity : 0, transform : "scale(0)", duration : 1, ease : "Back.easeOut"}, 1)


    const graph6 = gsap.timeline({paused : true})
    .from(".circleBox6", {strokeDashoffset : 691, duration : 3})
    .from(".card_graphique6 span", {opacity : 0, transform : "scale(0)", duration : 1, ease : "Back.easeOut"}, 1)




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

let count = 1;


function toggleZindex (element = ".txt1"){
    console.log(element);
    console.log(count);
     if(count === 1){
         gsap.set(element, {zIndex : 100})
     }else {
         gsap.set(element, {zIndex : 0})
     }
     count = count % 1
}


const setTxt = gsap.timeline({paused : true}) 
.fromTo(".txt1", {x : "-120%"},{x : "150%", duration: 10, repeat : -1, onRepeat : toggleZindex(), onRepeatParams: [".txt1"]},0) 
.fromTo(".txt2", {x : "150%", zIndex : 100},{x : "-150%", duration: 10,repeat : -1},4) 
.fromTo(".txt3", {x : "-120%"},{x : "150%", duration: 10,repeat : -1},6) 
.fromTo(".txt4", {x : "150%", zIndex : 100},{x : "-150%", duration: 10,repeat : -1},8) 
.fromTo(".txt5", {x : "-120%"},{x : "150%", duration: 10,repeat : -1},3) 
.fromTo(".txt6", {x : "150%", zIndex : 100},{x : "-150%", duration: 10,repeat : -1},6) 

const setImgs = gsap.timeline({scrollTrigger : {
    trigger : ".hobbies_content",
    scrub : true,
    start : "top-=30% center",
    end : "bottom-=10% center",
    markers : true,
}})
.from(".hobbie", {
    top : "50%", 
    left : "50%", 
    transform : "translate(-50% -50%)",
    ease : Expo.Out, duration :2,
    onComplete : setTxt.play(),
})
// .from(".hobbie6", {transform : "scale(0.5)", transformOrigin : "-25% -25%"}, 0)
// .to(".hobbie6", {transform : "scale(1.5)",  transformOrigin : "150% 150%" ,duration : 1, })
// .to(".hobbies_content", {transform : "rotateY(180deg)" , duration : 3})
// .to(".hobbie1" , {transform : "translateZ(100px)"}, 0)
