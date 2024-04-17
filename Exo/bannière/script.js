"use strict"

const btnSuccess = document.querySelector(".btn-success")
const cookies = document.querySelector(".cookies")
const icone = document.querySelector('i')
const btn2 = document.querySelector('.btn2')
const switchBox = document.querySelector(".switch")
const btn3 =document.querySelector(".btn3")
const icone2 = document.querySelector(".fa-moon")
const container = document.querySelector(".container-switch")
const p = document.querySelector(".dark")

btnSuccess.addEventListener('click', function(){
    cookies.style.opacity = "0"
})
icone.addEventListener('click', function(){
    icone.classList.toggle('fa-face-smile')
    icone.classList.toggle('happy')

})
btn2.addEventListener("click", function(){
    if(btn2.innerHTML === "Abonné"){
        btn2.innerHTML = "Abonnez-vous"
    }
    else{
        btn2.innerHTML = "Abonné"
    }
    btn2.classList.toggle("abonne")
})

switchBox.addEventListener("click", function(){
    if(p.innerHTML === "Dark Mode"){
        btn3.style.left = "58px"
        p.innerHTML = "Light Mode"
        document.body.style.backgroundColor = "white"
        icone2.classList = "fa-solid fa-sun"
        icone2.style.right = "55px"
        switchBox.style.backgroundColor= "blue"
    }
    else{
        btn3.style.left = "1px"
        p.innerHTML = "Dark Mode"
        document.body.style.backgroundColor = "#2c3c54"
        icone2.classList = "fa-solid fa-moon"
        icone2.style.right = "23px"
        switchBox.style.backgroundColor= "#1e2939"

    }
})
