import {gsap, Expo, Back} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";




//init smooth scrollBar

gsap.registerPlugin(ScrollTrigger);

const scroll = document.querySelector(".scroll")
const bodyScrollBar = Scrollbar.init(scroll)
bodyScrollBar.track.xAxis.element.remove();

ScrollTrigger.scrollerProxy(document.body,{
    scrollTop(value = 0.05){
        if(arguments.length){
            bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop
    },
})

bodyScrollBar.addListener(ScrollTrigger.update)
ScrollTrigger.defaults({scroller : document.body})



// #######################################-- Start --#######################################

window.onload = () => {
//set the start name word
gsap.timeline({defaults : {duration : 0.5, stagger : 0.2,}})
.from(".firstName", {height : 0, duration : 3},0)
.from(".firstName span", {y : -100},0)
.from(".lastName span", {duration : 1,opacity : 0, rotateX : -90 , transformOrigin : "bottom", ease : Expo.Out},0.3)
.from(".landing_content p", {autoAlpha : 0, scale : 0, ease : Back.easeOut, transformOrigin : "left", duration : 0.8})
}


// Animation du header

gsap.timeline({scrollTrigger :{
    trigger : ".landing_container",
    scrub : true,
    start : "bottom bottom",
    end : "bottom top",
    pin : true,
    pinType : "transform",
    pinSpacing :false,
}})
.to(".landing_container", {clipPath : "ellipse(150vh 0vh at 50% 0vh", ease : "none"})
.to(".landing_background",{backgroundSize : "150%", backgroundPosition : "0% 80%"}, 0)
.to(".firstName", {y : -200, x : -50, rotateY : -20, transformOrigin : "left"},0)
.to(".lastName", {y : -200, x : 250, rotateY : 20, transformOrigin : "right"},0)
.to(".landing_content p", {y : 0, x : 250, rotateX : 360},0)


// #######################################-- Presentation --#######################################

    gsap.from(".presentation h1", {
        scale : 1.5,
        y : 200,
        ease : Expo.out,
        scrollTrigger : {
            trigger : ".presentation h1",
            start : "top-=10% bottom",
            end : "center center",
            scrub : true,
            pinType : "transform"
        }
    })

    gsap.timeline({scrollTrigger : {
        trigger : ".presentation_box",
        scrub : true,
        start : "top +=10% bottom",
        pin : true,
        pinType : "transform"
    }, defaults : {duration : 0.3}, duration : 10})
    .to(".presentation_box", {backgroundColor : "#fea001", duration : 6},2.5)
    .to(".picture1",{keyframes : [{opacity : 0, duration : 3}, {display : "none"}]},2)
    .to(".picture2",{keyframes : [{opacity : 0}, {display : "block"}, {opacity : 1, duration : 3}]},5)
    .to(".content1", {rotateY : 90, duration : 3, opacity : 0, display : "none"},3.5)
    .fromTo(".content2", {display : "none", rotateY : -90, autoAlpha : 0}, {display : "block" ,rotateY : 0, duration : 3, autoAlpha : 1},6.5)


// #######################################-- Parcour --#######################################

    //rotation for set the back card in the back
    gsap.set(".card_box_back", {rotateY : "180deg"})


    // Animation for the title

    gsap.from(".parcour_title", {
        scale : 1.5,
        x : 900,
        y : 200,
        ease : Expo.out,
        scrollTrigger : {
            trigger : ".parcour h1",
            start : "top bottom",
            end : "center center",
            // markers : true,
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
    // Animation for the code

    const code1 = gsap.from(".code_html",{autoAlpha : 0, duration : 1, paused : true})
    const code2 = gsap.from(".code_css",{autoAlpha : 0, duration : 1, paused : true})
    const code3 = gsap.from(".code_js",{autoAlpha : 0, duration : 1, paused : true})
    const code4 = gsap.from(".code_react",{autoAlpha : 0, duration : 1, paused : true})
    const code5 = gsap.from(".code_firebase",{autoAlpha : 0, duration : 1, paused : true})
    const code6 = gsap.from(".code_gsap",{autoAlpha : 0, duration : 1, paused : true})


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
        onComplete : ()=> code1.play(),
        onReverseComplete : ()=> code1.reverse()
    })

    const gsapCard2 = gsap.from(".card_2", {
        delay : 0.3,
        autoAlpha : 0,
        x : 300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph2.play(),
        onComplete : ()=> code2.play(),
        onReverseComplete : ()=> code2.reverse()
    })

    const gsapCard4 = gsap.from(".card_4", {
        delay : 0.3,
        autoAlpha : 0,
        x : -300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph4.play(),
        onComplete : ()=> code4.play(),
        onReverseComplete : ()=> code4.reverse()
    })
 
    const gsapCard5 = gsap.from(".card_5", {
        autoAlpha : 0,
        x : 300,
        duration : 1.5,
        paused : true,
        onStart : ()=> graph5.play(),
        onComplete : ()=> code5.play(),
        onReverseComplete : ()=> code5.reverse()
    })
    
    const gsapCard3 = gsap.from(".card_3", {
        scale : 0, 
        onStart : ()=> graph3.play(),
        onComplete : ()=> code3.play(),
        onReverseComplete : ()=> code3.reverse(),
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
        onComplete : ()=> code6.play(),
        onReverseComplete : ()=> code6.reverse(),
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

// set the pic in the center

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
    // markers : true,
}, defaults : {ease : Expo.Out, duration : 2},
    onStart : ()=> setTxt.play(),
},)
.fromTo(".hobbie1", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "15%", left : "20%"}, 0)
.fromTo(".hobbie2", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "60%", left : "20%"}, 0)
.fromTo(".hobbie3", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "20%", left : "80%"}, 0)
.fromTo(".hobbie4", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "65%", left : "83%"}, 0)
.fromTo(".hobbie5", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50}, {top : "100%", left : "50%"}, 0)
.fromTo(".hobbie6", {top : "50%", left : "50%", yPercent : -50 , xPercent : -50, scale : 0.5},{yPercent : -50 , xPercent : -50, scale : 1.2}, 0)


