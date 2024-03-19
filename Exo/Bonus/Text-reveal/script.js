"use strict"

const reveal = document.querySelector(".reveal")
const reset = document.querySelector(".reset")
const span = document.querySelectorAll("span")
console.log(span);
reveal.addEventListener("click", opac)
reset.addEventListener("click", trans)

function opac() {
    for (let i = 0; i < span.length; i++) {
        const element = span[i];
        element.style.color = "black"
        element.style.transitionDelay = `${i*0.5}s`
        element.style.transitionDuration = "1s"
    }
}

function trans() {
    for (let i = 0; i < span.length; i++) {
        const element = span[i];
            element.style.color = "transparent"
            element.style.transition = "0s"
    }
}