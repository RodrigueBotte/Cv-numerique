"use strict"

const icone = document.querySelector('.navbar-mobile i')
console.log(icone);
const modal = document.querySelector('.modal')
console.log(modal);

icone.addEventListener(('click'), function () {
    // ! Manque le retour avec modaal.style.top = 0
    // modal.style.top = 0
    modal.classList.toggle('change-modal')
    icone.classList.toggle('fa-times')
})