"use strict"

const prix = {

    justePrix() {
        const main = document.createElement("main")
        document.body.append(main)
        const label = document.createElement("label")
        const input = document.createElement("input")
        input.setAttribute("type", "number")
        const p = document.createElement("p")
        main.append(label, input, p)
        label.innerHTML = "Trouvez le nombre compris entre 1 et 100! "
        // p.innerHTML= ""

        function random() {
            const rand = 1 + Math.floor(100 * Math.random())
            console.log(rand);
            input.addEventListener("change", () => {
                if (input.value < rand) {
                    p.innerHTML = "Le chiffre est plus grand"
                }
                else if (input.value > rand) {
                    p.innerHTML = "Le chiffre est plus petit"
                }
                else {
                    p.innerHTML = "Vous avez le Juste Priiiiiiiiiix!!!!!!!!"
                }
            })
        }
        random()
    }
}

export default prix