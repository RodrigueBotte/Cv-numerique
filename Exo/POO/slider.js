"use strict"
const slider = {
    sliders() {
        const main = document.createElement("main")
        main.setAttribute("class","slidr")
        document.body.append(main)
        const images = ["./images/pays1.jpg", "./images/pays2.jpg", "./images/pays3.jpg", "./images/pays4.jpg", "./images/corentin.jpg"]

        function affiche() {
            // ------Déclaration des variables-------------------
            const img = document.createElement("img")
            main.append(img)
            const btn1 = document.createElement("button")
            const btn2 = document.createElement("button")
            btn1.setAttribute("class", "btn1")
            btn2.setAttribute("class", "btn2")
            const t1 = document.createTextNode("<")
            const t2 = document.createTextNode(">")
            btn1.appendChild(t1)
            btn2.appendChild(t2)
            main.appendChild(btn1)
            main.appendChild(btn2)
            btn2.addEventListener("click", suivant)
            img.src = `${images[3]}`
            img.style.opacity = 1

            // -------Création des boutons de selection d'une image--------
            const div = document.createElement("div")
            div.setAttribute("class", "gfd")
            main.append(div)

            for (let y = 0; y < images.length; y++) {
                const ctn = document.createElement("button")
                main.append(ctn)
                ctn.classList.add("machin", "rond" + y)
                div.appendChild(ctn)
                ctn.addEventListener("click", () => {
                    img.src = `${images[y]}`
                })
            }


            // -----------Function de fonctionnement caroussel--------
            let i = 0
            function suivant() {
                var x = i++
                img.style.opacity = 0;
                img.ontransitionend = () => {
                    img.src = `${images[x]}`
                }
                img.onload = () => {
                    img.style.opacity = 1
                }
                // img.ontransitionend = ()=>
                // {
                //     img.src = `${images[x]}`
                //     img.style.opacity= 1
                // }
                // setTimeout(()=>
                // {
                //     img.src = `${images[x]}`
                //     img.style.opacity= 1
                // }, 1000);
                if (x === `${images.length}` - 1) {
                    i = 0
                }
            }

            btn1.addEventListener("click", precedent)
            function precedent() {
                var x = i--
                img.src = `${images[x]}`
                console.log(img);

                if (x === 0) {
                    i = `${images.length}` - 1
                }
            }

            // ------------Défillement automatique--------------
            setInterval(() => {
                var x = i++
                img.src = `${images[x]}`

                if (x === `${images.length}` - 1) {
                    i = 0
                }
            }, 5000)

        }
        affiche()
    }
}

export default slider;
