// var tl = gsap.timeline();

// tl
// .to(".fs",{
//     height : 0,
//     duration : 2,
//     ease : Expo.easeInOut
// })
// .to(".elem",{
//     height : "100%",
//     duration : 2,
//     delay : -2,
//     ease : Expo.easeInOut
// })
// .to(".white",{
//     height : "100%",
//     duration :2 ,
//     delay : -1.7,
//     ease : Expo.easeInOut
// })

// document.querySelectorAll(".reveal")
//     .forEach(function(elem){
//         let parent = document.createElement("span");
//         let child = document.createElement("span");

//         parent.classList.add("parent");
//         child.classList.add("child");

//         child.textContent = elem.textContent;
//         parent.appendChild(child);

//         elem.innerHTML = "";
//         elem.appendChild(parent);
//     })








































document.querySelectorAll(".reveal")
    .forEach(function(elem){
        var spanparent = document.createElement("spanparent");
        var spanchild = document.createElement("spanchild");

        spanparent.classList.add("parent");
        spanchild.classList.add("child");

        spanchild.textContent = elem.textContent;
        spanparent.appendChild(spanchild);

        elem.innerHTML = "";
        elem.appendChild(spanparent);

    })