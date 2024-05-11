"use strict"

const form = document.getElementById('form')
const pays = document.getElementById('pays')
const start = document.getElementById('start')
const end = document.getElementById('end')
const listResultats = document.querySelector('.list-resultats')
const voyages =[
    {
        pays: "dernierBar",
        prix: 7,
        voyageurs:4
    },{
        pays: "dernierBar",
        prix: 9,
        voyageurs:2
    },{
        pays: "carreHall",
        prix: 10,
        voyageurs:4
    },{
        pays: "atomik",
        prix: 7,
        voyageurs:4
    }
]

form.addEventListener('submit', function(e){
    e.preventDefault()
    const choix= {
        pays: pays.value,
        start: start.value,
        end: end.value
    }
    console.log(choix, "choix");
    const choixString = JSON.stringify(choix)
    console.log(choixString);
    localStorage.setItem('details', choixString)
    window.location.href = window.location.href
})

function displayDetails(){
    const choixObjet = JSON.parse(localStorage.getItem('details'))
    console.log(choixObjet, "choixObjet");
    pays.value = choixObjet.pays
    start.value = choixObjet.start
    end.value = choixObjet.end
    const resultats = voyages.filter((voyage)=>voyage.pays === pays.value)
    console.log(resultats, "resultats");
    resultats.forEach(resultat=>{
        console.log(resultat, "resultat");
        const item =
        `
        <div class="item">
        <p class="item-pays">
        ${resultat.pays}
        </p>
        <p >
        offre pour ${resultat.voyageurs} personnes
        </p>
        <p >
        des pintes au prix de ${resultat.prix} € par personne
        </p>
        <button> Go boire des pintes!!!</button>
        </div>
        `
        listResultats.innerHTML += item
    })
}
displayDetails()