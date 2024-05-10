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

// ---------------------------------------------------

const modal1 = document.querySelector(".modal-container")
const btn = document.querySelector('.btn-success')
const code = document.querySelector('.code')
const icone1 = document.querySelector('.fa-times')

window.addEventListener("scroll", function scrollI(){
    console.log('repéré');
    let hauteur = this.document.documentElement.scrollTop
    console.log(hauteur);
    if (hauteur > 400) {
        console.log("affiche la modal");
        modal1.style.display = "flex"
    }
    btn.addEventListener('click', function(){
        code.style.display = "block"
        btn.style.display  = "none"
    })
    icone1.addEventListener('click', function(){
        modal1.style.display = "none"
        window.removeEventListener('scroll', scrollI)
    })
})

const btn2 = document.querySelector(".btn2")
const ctn = document.querySelector('.container-notif')

btn2.addEventListener('click', function(){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerHTML = "Votre fichier est bien enregistré!"
    console.log(notif);
    ctn.appendChild(notif)
    setTimeout(function(){
        notif.remove()
    },2000)
})