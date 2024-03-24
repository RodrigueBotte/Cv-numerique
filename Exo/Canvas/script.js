"use strict"

const canvas = document.querySelector("canvas")

function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
resize()
const ctx = canvas.getContext("2d")

window.addEventListener("mouseenter", (e)=>{
ctx.beginPath()
ctx.strokeStyle = "black"
ctx.moveTo(e.clientX, e.clientY)
ctx.lineTo(e.clientX, e.clientY)
ctx.stroke()
})
