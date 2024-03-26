"use strict ";
const paint = {
    paints() {
        const main = document.createElement("main")
        document.body.append(main)
        const div = document.createElement("div")
        main.append(div)

        const input = document.createElement("input")
        input.setAttribute("type", "color")
        const label = document.createElement("label")
        label.for = "size"
        label.textContent = "Taille de brosse"
        const select = document.createElement("select")
        select.name = "size"
        select.setAttribute("id", "size")
        const btn1 = document.createElement("button")
        btn1.setAttribute("id", "back")
        btn1.textContent = "&#8592"
        const btn2 = document.createElement("button")
        btn2.setAttribute("id", "forw")
        btn2.textContent = "&#8594"
        const btn3 = document.createElement("button")
        btn3.setAttribute("id", "save")
        btn3.textContent = "Sauvegarder"
        div.append(input, label, select, btn1, btn2, btn3)
        const canvas = document.createElement("canvas")
        main.append(canvas)

        // let canvas = document.querySelector("canvas");
        let flags = 0;
        let ctxt = canvas.getContext("2d");

        // -------------------------------------------------
        // let sel = document.getElementById("size");
        // let col = document.querySelector("input[type=color]");
        // let bck = document.querySelector("#back");
        // let fwd = document.querySelector("#forw");
        // let sauv = document.querySelector("save");
        // console.log(document.querySelector("input[type=color]"));
        let stateTab = new Array();

        let posTab = 0;
        let wB = 10;
        let colour = input.value;
        // ----------------------------------------------------
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctxt.fillStyle = "#456456";
        ctxt.fillRect(0, 0, canvas.width, canvas.height);
        stateTab.push(ctxt.getImageData(0, 0, canvas.width, canvas.height));

        canvas.addEventListener("mousedown", (e) => {
            ctxt.beginPath();
            ctxt.lineWidth = wB;
            ctxt.strokeStyle = colour;
            ctxt.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            flags = 1;
        });
        canvas.addEventListener("mouseup", (e) => {
            flags = 0;
            stateTab.push(ctxt.getImageData(0, 0, canvas.width, canvas.height));
            posTab++;
        });
        canvas.addEventListener("mouseout", (e) => { flags = 0; })

        canvas.addEventListener("mousemove", (e) => {
            if (flags) {
                ctxt.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
                ctxt.stroke();
            }
        })

        // ! ------------------ listener -----------------
        select.addEventListener("change", (e) => { wB = e.target.value.split("px")[0]; })
        let i = 0;
        while (i < 100) {
            let opt = document.createElement("option");
            opt.textContent = `${i}px`;
            opt.setAttribute("name", `${i}px`);
            select.appendChild(opt);
            if (i === 10)
                opt.setAttribute("selected", "selected");
            i++;
        }


        input.addEventListener("change", (e) => {
            colour = e.target.value;
            console.log(typeof e.target.value);
        })

        btn1.addEventListener("click", (e) => {
            if (posTab > 0) {
                posTab--;
                ctxt.putImageData(stateTab[posTab], 0, 0)
            }
        });

        btn2.addEventListener("click", (e) => {
            if (posTab < stateTab.length - 1) {
                posTab++;
                ctxt.putImageData(stateTab[posTab], 0, 0)
            }
        })

        btn3.addEventListener("click", (e) => {
            canvas.toDataURL("image/jpeg", 1.0);
        });
    }
}

export default paint;