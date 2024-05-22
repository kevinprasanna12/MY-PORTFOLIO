function moverhtml(){
    document.getElementById("html").style.opacity=1;
}
function mouthtml(){
    document.getElementById("html").style.opacity=0;
}
function movercss(){
    document.getElementById("css").style.opacity=1;
}
function moutcss(){
    document.getElementById("css").style.opacity=0;
}
function moverjs(){
    document.getElementById("js").style.opacity=1;
}
function moutjs(){
    document.getElementById("js").style.opacity=0;
}
function moverfigma(){
    document.getElementById("figma").style.opacity=1;
}
function moutfigma(){
    document.getElementById("figma").style.opacity=0;
}
function moverda(){
    document.getElementById("davinci").style.opacity=1;
}
function moutda(){
    document.getElementById("davinci").style.opacity=0;
}
function moverink(){
    document.getElementById("ink").style.opacity=1;
}
function moutink(){
    document.getElementById("ink").style.opacity=0;
}
function moverwire(){
    document.getElementById("wire").style.opacity=1;
}
function moutwire(){
    document.getElementById("wire").style.opacity=0;
}

//-------------------------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.to('.mainbox',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        opacity: 1,
        y: 0,
        duration: 0.2
       
    });
    gsap.to('.interestbox',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        opacity: 1,
        duration: .2,
        y:0
       
    });
    gsap.to('.achievements',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        y: 0,
        opacity: 1,
        duration: .4
       
    });
    gsap.to('.education',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        y:0,
        opacity: 1,
        duration: .4
       
    });
    
    gsap.to('.project',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        opacity: 1,
        duration: .6,
        scale: 1
       
    });
    gsap.to('.skillbox',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        opacity: 1,
        x:0,
        duration: .8
       
    });
   
    gsap.to('.mybox',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        opacity: 1,
        duration: .8,
        y: 0,
        
       
    });

    gsap.to('.social',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        opacity: 1,
        duration: 1.2,
        y:0
       
    });


    









   });