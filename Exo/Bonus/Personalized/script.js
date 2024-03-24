"use strict"

const zoom1 = document.querySelector(".zoom1")
const img1 = document.querySelector(".img1")
const div1 = document.querySelector("#img1")
zoom1.addEventListener("click", agrandir)
function agrandir() {
    if (div1.style.width === "70vw") {
        div1.style.width = "35vw"
        div1.style.height = "40vh"
        zoom1.setAttribute("src", "./image/icons8-zoomer-50.png")
    }
    else {
        div1.style.width = "70vw"
        div1.style.height = "80vh"
        zoom1.setAttribute("src", "./image/icons8-dézoomer-50.png")
    }
}

const zoom2 = document.querySelector(".zoom2")
const img2 = document.querySelector(".img2")
const div2 = document.querySelector("#img2")
zoom2.addEventListener("click", agrandir2)
function agrandir2() {
    if (div2.style.width === "70vw") {
        div2.style.width = "35vw"
        div2.style.height = "40vh"
        zoom1.setAttribute("src", "./image/icons8-zoomer-50.png")
    }
    else {
        div2.style.width = "70vw"
        div2.style.height = "80vh"
        zoom2.setAttribute("src", "./image/icons8-dézoomer-50.png")
    }
}

const zoom3 = document.querySelector(".zoom3")
const img3 = document.querySelector(".img3")
const div3 = document.querySelector("#img3")
zoom3.addEventListener("click", agrandir3)
function agrandir3() {
    if (div3.style.width === "70vw") {
        div3.style.width = "35vw"
        div3.style.height = "40vh"
        zoom3.setAttribute("src", "./image/icons8-zoomer-50.png")
    }
    else {
        div3.style.width = "70vw"
        div3.style.height = "80vh"
        zoom3.setAttribute("src", "./image/icons8-dézoomer-50.png")
    }
}

