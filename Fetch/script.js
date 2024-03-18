"use strict"

// todo --------------------Exo 1
const url = "./hero.json"

fetch(url).then(identite)

function identite(response) {
    if (response.ok) {
        response.json()
            .then(function (data) {
                const option = document.querySelectorAll("option")
                console.log(option);
                for (let i = 0; i < option.length; i++) {
                    const element = option[i];
                    console.log(element);
                    element.addEventListener("click", affiche);
                    function affiche(e) {
                        console.log(i);
                        const div = document.querySelector("div")
                        if (!div.querySelector(".hero" + i)) {
                            div.innerHTML += `<div class="hero${i}">${data.members[i].name}, ${data.members[i].age}, ${data.members[i].secretIdentity}, ${data.members[i].powers}</div>`
                        }
                        else {
                            div.querySelector(".hero" + i).remove()
                        }
                    }
                }
            })
            .catch(error => console.error(error));
    }
}

// todo----------------Exo 2 ------------------------

const lang = "./langue.json"

fetch(lang).then(langage)

function langage(response) {
    if (response.ok) {
        response.json()
            .then(function (changement) {
                const lg = document.querySelectorAll("#langue")
                console.log(lg);
                for (let i = 0; i < lg.length; i++) {
                    const jkl = lg[i];
                    console.log(jkl);
                    const h = document.querySelector("h1")
                    const h2 = document.querySelector("h2")
                    const p = document.querySelector("p")
                    jkl.addEventListener("input", encore);
                    // const dfg = document.querySelector("#langue")
                    function encore(u) {
                        console.log(lg[0].value);
                        if (lg[0].value < changement.langue.length) {
                            h.innerHTML = `${changement.langue[lg[0].value].h1}`
                            h2.innerHTML = `${changement.langue[lg[0].value].h2}`
                            p.innerHTML = `${changement.langue[lg[0].value].p}`
                        }
                        else {
                            h.innerHTML = `${"Bonjour tout le monde"}`
                            h2.innerHTML = `${"Bienvenue dans le monde de Json"}`
                            p.innerHTML = `${"C'est vraiment pas facile"}`
                        }
                    }
                }
            })
            .catch(error => console.error(error));
        }   
    }

// todo----------------------Exo 3 ---------------------------

fetch ("https://api.thedogapi.com/v1/images/search").then(requete)

function requete(response) {
    console.log(response);
    if(response.ok){
        response.json()
        .then(function (param) {
            console.log(param[0].url);
            const recup = document.querySelector(".recup")
            let img = document.createElement("img")
            img.src = param[0].url
            console.log(img);
            recup.append(img)
        })
        .catch(error => console.error(error));
    }
}
