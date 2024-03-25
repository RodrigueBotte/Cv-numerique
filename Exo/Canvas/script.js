"use strict ";

let canvas = document.querySelector("canvas");
let flags = 0;
let ctxt = canvas.getContext("2d");

// -------------------------------------------------
let sel = document.getElementById("size");
let col = document.querySelector("input[type=color]");
let bck = document.querySelector("#back");
let fwd = document.querySelector("#forw");
let sauv = document.querySelector("save");

let stateTab = new Array();

let posTab = 0;
let wB = 10;
let colour = col.value;
// ----------------------------------------------------
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctxt.fillStyle = "#456456";
ctxt.fillRect(0,0,canvas.width, canvas.height);
stateTab.push(ctxt.getImageData(0,0,canvas.width, canvas.height));

canvas.addEventListener("mousedown", (e)=>{
    ctxt.beginPath();
    ctxt.lineWidth = wB;
    ctxt.strokeStyle = colour;
    ctxt.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    flags = 1;
});
canvas.addEventListener("mouseup", (e)=>{
    flags = 0;
    stateTab.push(ctxt.getImageData(0,0,canvas.width, canvas.height));
    posTab++;
});
canvas.addEventListener("mouseout", (e)=>{flags = 0;})

canvas.addEventListener("mousemove", (e)=>{
    if (flags)
    {
        ctxt.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctxt.stroke();
    }    
})

// ! ------------------ listener -----------------
sel.addEventListener("change", (e)=>{wB = e.target.value.split("px")[0];})
let i = 0;
while (i < 100)
{
    let opt = document.createElement("option");
    opt.textContent = `${i}px`;
    opt.setAttribute("name",`${i}px`);
    sel.appendChild(opt);
    if(i === 10)
        opt.setAttribute("selected","selected");
    i++;
}


col.addEventListener("change", (e)=>{
    colour = e.target.value;
    console.log(typeof e.target.value);
})

bck.addEventListener("click", (e)=>
{
    if (posTab > 0)
    {
        posTab--;
        ctxt.putImageData(stateTab[posTab], 0,0)
    }
});

fwd.addEventListener("click", (e)=>{
    if (posTab < stateTab.length -1 )
    {
        posTab++;
        ctxt.putImageData(stateTab[posTab],0,0)
    }
})

sauv.addEventListener("click", (e)=>{
    canvas.toDataURL("image/jpeg", 1.0);
});