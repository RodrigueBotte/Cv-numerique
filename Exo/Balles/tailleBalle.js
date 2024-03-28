"use strict"

export default class tailleBalle {
    rond = 20 + Math.floor(100 * Math.random())
    x = Math.floor(255 * Math.random())
    y = Math.floor(255 * Math.random())
    z = Math.floor(255 * Math.random()) 
    t = 150 
    r= 150

    crl;
    canvas;
    snapshot;

    vitesseV = 5 
    vitesseH = 5
    constructor() {
        this.canvas = document.querySelector("canvas")
        this.crl = this.canvas.getContext("2d")

        this.canvas.width = 1000
        this.canvas.height = 800
    }

    cercle(cr) {
        snapshot = crl.getImageData(0, 0, this.canvas.width, this.canvas.height)
        this.move()
        // crl.style.width = `${this.rond}px`
        // crl.style.aspectRatio = "1/1"
        // crl.style.borderRadius = "50%"
        // crl.style.backgroundColor = `rgb(${this.x}, ${this.y}, ${this.z})`
    }
    event(cr) {
        document.body.addEventListener("click", () => {
            this.cercle(cr)

        })
    }
    move(){
        crl.clearRect(0, 0, canvas.width, canvas.height)
        crl.putImageData(snapshot, 0, 0)
        crl.lineWidth = 8
        crl.beginPath()
        crl.arc(this.t, this.r, this.rond, 0, 2 * Math.PI)
        crl.fillStyle = `rgb(${this.x}, ${this.y}, ${this.z})`
        crl.fill()
        crl.stroke()
        if(this.t + this.rond > canvas.width || this.t - this.rond <0){
            vitesseH = -vitesseH
        }
        if(this.r + this.rond > canvas.height || this.r - this.rond <0){
            vitesseV = -vitesseV
        }
        this.t += vitesseH
        this.r += vitesseV
        requestAnimationFrame(move)
    }

}