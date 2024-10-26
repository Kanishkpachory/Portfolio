function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        var parent = document.createElement("span")
        var child = document.createElement("span")

        parent.classList.add("parent")
        child.classList.add("child")

        child.innerHTML = elem.innerHTML
        parent.appendChild(child)

        elem.innerHTML = "";
        elem.appendChild(parent)
    })
}

function valueSetters(){
    gsap.set("nav a" , {
        y : "-100%",
        opacity : 0
    })
    gsap.set(".home span .child",{
        y : "100%"
    })
    gsap.set(".home .row img",{
        opacity : 0
    })

    document.querySelectorAll("#Visual>g>g>path , #Visual>g>g>polyline").forEach(function(e){
        var character = e;

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })

}

function loaderAnimation(){
    var tl = gsap.timeline()

tl
    .from(".loader .child span",{
        x : 105,
        duration : 1.3 ,
        stagger : .2,
        ease : Power3.easeInOut
    })
    .to(".loader .parent .child",{
        y : "-100%" ,
        duration : 1 ,
        // delay : 1 ,
        ease : Circ.easeInOut
    })
    .to(".loader",{
        height : 0,
        duration : 1,
        ease : Circ.easeInOut
    })
    .to(".green",{
        top : 0,
        height : "100%",
        duration : 1,
        delay : -.8,
        ease : Circ.easeInOut
    })
    .to(".green",{
        height : "0%",
        duration : 1,
        delay : -.5,
        ease : Circ.easeInOut,
        onComplete : function(){
            animateHomepage()
        }
    })
}

function animateHomepage(){
    var tl = gsap.timeline();

    tl.to("nav a",{
        y :0 ,
        opacity :1,
        stagger : .05,
        ease : Expo.easeInOut,
    })

    tl.to(".home .parent .child",{
        y :0,
        stagger : .11,
        duration :1 ,
        ease : Expo.easeInOut,
    })

    tl.to(".home .row img",{
        opacity :1,
        delay : -.5,
        ease : Expo.easeInOut,
        onComplete : function(){
            animateSvg();
        }
    })
}

function animateSvg(){
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset :0,
        duration :1.9,
        ease : Expo.easeInOut,  
    })
}

function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}

// Function to show cursor and move it with the mouse
function cardShow(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showImage;
        cnt.addEventListener("mousemove",function(dets){
            // console.log(dets.target.dataset.index)
            // console.log(document.querySelector(".cursor").children)
            document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity =1;
            showImage = dets.target;
            document.querySelector(".cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX-200}px ,${dets.clientY+3000}px)   `;
            showImage.style.filter = `grayscale(1)`

            document.querySelector(".work").style.backgroundColor = "#" + dets.target.dataset.color ;
        })
        cnt.addEventListener("mouseleave",function(dets){
            document.querySelector(".cursor").children[showImage.dataset.index].style.opacity = 0;
            showImage.style.filter = `grayscale(0)`

            document.querySelector(".work").style.backgroundColor = "#f2f2f2" 
        })
    })
}
// Initialize the cursor effect


locomotive()
revealToSpan();
valueSetters();
// loaderAnimation();
animateHomepage();
cardShow();

