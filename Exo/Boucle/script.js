"use strict"

const questions = document.querySelectorAll(".question")
console.log(questions);
const deux = questions[2]
console.log(deux);

questions.forEach((item)=>{
    console.log(item, 'item');
    item.addEventListener('click', function(){
        console.log('item cliqué');
        const next = item.nextElementSibling
        console.log(next);
        next.classList.toggle('visible')
        const icone = item.lastElementChild;
        console.log(icone);
        icone.classList.toggle('fa-chevron-up')
    })
})

const vignettes = document.querySelectorAll('.small')
console.log(vignettes);
const btn  = document.querySelector('.btn-add')

vignettes.forEach((item)=>{
    console.log(item, 'ce message apparait pour chaque item du tableau');
    item.addEventListener('click', ()=>{
        let imgSource = item.getAttribute('src')
        const fullImg = document.querySelector('#full')
        console.log(imgSource);
        fullImg.setAttribute('src', imgSource)
    })
    
})

let panier = 0
const panierContainer = document.querySelector('.panier-container')
btn.addEventListener('click', ()=>{
    console.log('bouton cliqué');
    panier = panier +1
    console.log(panier);
    if (panier <2) {
        panierContainer.innerHTML = "Vous avez ajouter " +panier+ " bière à votre commande"  
    }
    else{
        panierContainer.innerHTML = "Vous avez ajouter " +panier+ " bières à votre commande"
    }
})
