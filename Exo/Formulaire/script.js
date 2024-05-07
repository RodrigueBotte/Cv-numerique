"use strict"

const form = document.getElementById('formulaire')
const prenom = document.getElementById('prenom')
const nom = document.getElementById('nom')
const email = document.getElementById('email')
const message = document.getElementById('message')

form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log("formulaire envoyé");
    const prenomValue = prenom.value.trim()
    const nomValue = nom.value.trim()
    const emailValue = email.value.trim()
    const messageValue = message.value.trim()
    console.log(prenomValue, "prenom");
    console.log(nomValue, "nom");
    console.log(emailValue, "email");
    console.log(messageValue, "message");

    if (prenomValue === "") {
        console.log('erreur');
    }
    else{
        console.log('success');
    }

    if (prenomValue.length < 2 || prenomValue.length > 10) {
        console.log('erreur prenom');
        prenom.nextElementSibling.classList.remove('invisible')
    }
    else if (nomValue.length<3 || nomValue.length>15){
        console.log('erreur nom');
        nom.nextElementSibling.classList.remove('invisible')
    }
    else if (messageValue.length<10 || messageValue.length>100){
        console.log('erreur message');
        message.nextElementSibling.classList.remove('invisible')
    }
    else{
        console.log('success');
    }
})