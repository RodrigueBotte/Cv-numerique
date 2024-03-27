"use strict"

const main = document.querySelector("main")
const label = document.createElement("label")
const input = document.createElement("input")
input.setAttribute("min", "1")
input.setAttribute("max", "100")
input.focus()
const btn = document.createElement("button")
btn.setAttribute("class", "btn1")
const btn2 = document.createElement("button")
btn2.setAttribute("class", "btn2")
btn2.textContent = ("Proposition")
btn.textContent = "Recommencer"
input.setAttribute("type", "number")
const p = document.createElement("p")
const img2 = document.createElement("img")
img2.setAttribute("class", "vid")
img2.src = "./images/lepers-oui.gif"
const img3 = document.createElement("img")
img3.setAttribute("class", "vid2")
img3.src = "./images/lepers-non.gif"
main.append(label, input, btn2, p, btn, img2, img3)
label.innerHTML = "Trouvez le nombre compris entre 1 et 100!"


function random() {
    let i = 0
    const rand = 1 + Math.floor(100 * Math.random())
    console.log(rand);
    input.addEventListener("change", () => {
        if (i===6 && input.value != rand){
            i=0;
            p.innerHTML= "vous avez perdu!"
            btn.style.opacity = "1"
            input.disabled = true
            btn2.disabled = true
        }
        else if(input.value<1 || input.value>100){
            p.innerHTML = "Le nombre doit etre compris entre 1 et 100"
            
        }
        else if (input.value < rand) {
            i++;
            p.innerHTML =   `Le chiffre est plus grand que ${input.value} <br> Il vous reste ${7 - i} vie.`
            img3.style.opacity = "1"
        }
        else if (input.value > rand) {
            i++;
            p.innerHTML =   `Le chiffre est plus petit que ${input.value} <br> Il vous reste ${7 - i} vie.`
            img3.style.opacity = "1"
        }
        else {
            p.innerHTML = "Vous avez le Juste Priiiiiiiiiix!!!!!!!!"
            btn.style.opacity = "1"
            input.disabled = true
            btn2.disabled = true
            img2.style.opacity = "1"
            img3.style.opacity = "0"
        }
    })
}
random()

btn.addEventListener("click", ()=>{
    random()
    input.disabled = false
    btn2.disabled = false
    input.value = ""
    p.innerHTML = ""
    btn.style.opacity = "0"
    img2.style.opacity = "0"
    input.focus()
})
input.addEventListener("click", ()=>{
    input.value= ""
    img3.style.opacity = "0"
})
document.body.addEventListener("click", ()=>{
    input.focus()
    input.value= ""
})

const start = document.querySelector(".start")
const img = document.querySelector("img")
const div2 = document.querySelector(".intro")

start.addEventListener("click", ()=>{
    div2.style.transform = "translateX(100%)"
})