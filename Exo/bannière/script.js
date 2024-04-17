"use strict"

const btnSuccess = document.querySelector(".btn-success")
const cookies = document.querySelector(".cookies")
const icone = document.querySelector('i')
const btn2 = document.querySelector('.btn2')

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
