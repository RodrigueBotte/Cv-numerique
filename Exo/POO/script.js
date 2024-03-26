"use strict"

import L from "./slider.js"
import P from "./paint.js"
import J from "./justeprix.js"

const select = document.querySelector("select")

select.addEventListener("click", (e) => {
    console.log(document.querySelector("main"));
    if (document.querySelector("main")) {
        document.querySelector("main").remove()
    }
    // console.log(e.target);
    if (e.target.value === "paint") {
        P.paints()
    }
    else if (e.target.value === "slider") {

        L.sliders()
    }
    else if (e.target.value === "justePrix"){
        J.justePrix()
    }
})