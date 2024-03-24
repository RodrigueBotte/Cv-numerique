"use strict"

const dev = document.querySelector("h1")
const web = document.querySelector(".web1")
const dev2 =document.querySelector(".dev2")
const web2= document.querySelector(".web2")
const dev1 = document.querySelector(".dev1")
const nom = document.querySelector(".nom")
function anim1() {
    const keyframes = [
        {left: "100%"},
        {left: "0%"}
        ];
    const keyframes2 =[
        {left: "-70%"},
        {left: "10%"}
    ]
    const options = {
        duration: 2000,
        iterations: 1, 
        fill: "forwards"
    };
let a = dev.animate(keyframes, options)
let b = web.animate(keyframes2, options)

a.addEventListener("finish", ()=>{
    dev1.style.opacity = "0"
    nom.style.opacity = "1"
    dev2.animate(keyframes, options)
    web2.animate(keyframes2, options)
})
}
anim1();