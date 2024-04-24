// ?---------------EXO-------------------------


const tel = document.querySelector("#tel")
const email = document.querySelector("#email")
console.log(tel);
const r20 = /^\d+$/
const r21 = /^[A-Za-z]+\.*[A-Za-z]+@[a-z]+\.[a-z]+$/

tel.addEventListener("input", function(e){
    if(r20.test(tel.value) === false){
        tel.style.backgroundColor = 'red'
    }
    else{
        tel.style.backgroundColor = 'white'
    }
})

email.addEventListener("input", function(e){
    if(r21.test(email.value) === false){
        email.style.backgroundColor = 'red'
    }
    else{
        email.style.backgroundColor = 'white'
    }
})

const r22 = /^[A-Za-z]+$/
const nom= document.querySelector("#nom")
nom.addEventListener("input", function(e){
    if(r22.test(nom.value) === false){
        nom.style.backgroundColor = 'red'
    }
    else{
        nom.style.backgroundColor = 'white'
    }
})

const span= document.querySelector("span")
const r23= /\d*([A-Za-z]|\d)+/
const r24= /\d*[A-Za-z]{1,}\d{1,}|\d{1,}[A-Za-z]{1,}/
const r25 = /\d*[@#%-_]*[A-Za-z]{2,}\d{2,}[@#%-_]{1,}|[A-Za-z]{2,}[@#%-_]{1,}\d{2,}|\d{2,}[A-Za-z]{2,}[@#%-_]{1,}|\d{2,}[@#%-_]{1,}[A-Za-z]{2,}|[@#%-_]{1,}[A-Za-z]{2,}\d{2,}|[@#%-_]{1,}\d{2,}[A-Za-z]{2,}/gm
const mdp= document.querySelector("#mdp")
mdp.addEventListener("input", function(e){
    if (r25.test(mdp.value) === true){
        span.style.width = '100%'
        span.style.backgroundColor = 'green'  
        span.style.transition= ".3s linear"
    }else if (r24.test(mdp.value) === true){
        span.style.width = '66%'  
        span.style.backgroundColor = 'yellow'  
        span.style.transition= ".3s linear"      
    }else if (r23.test(mdp.value) === true){
        span.style.width = '33%'
        span.style.backgroundColor = 'orange'
        span.style.transition= ".3s linear"
    } else{
        span.style.width= '10%'
        span.style.backgroundColor = 'red'
        span.style.transition= ".3s linear"
    }
})

const mdp2 =document.querySelector("#mdp2")

mdp2.addEventListener("input", function(e){
    if (mdp2.value === mdp.value){
        mdp2.style.backgroundColor ='white'
    }else{
        mdp2.style.backgroundColor ='red'
    }
})

function hid() {
    if (mdp.type === "password"){
        mdp.type = "text";
    }else{
        mdp.type = "password";
    }
    
}