"use strict"

var tableau1 = [4, 59, 7, 852, 634]
var tableau2= [4, "59", 7, 852, 634]

function tri(a, b) {
    superTri(a,b).then((message)=>{console.log(message);}).catch(err=>console.error(err))
    return a - b;
    
}

console.log(tableau1.sort(tri));
console.log(tableau2.sort(tri));

function superTri (a,b){ 
    return new Promise(function(resolve, reject){
    if(typeof a === typeof b){
        resolve("Le tableau est bien trié")
    }
    else{
        reject("Le tableau ne peut pas être trié")
    }
})
}

const rond1 = document.querySelector(".rond1")
const rond2 = document.querySelector(".rond2")
const rond3 = document.querySelector(".rond3")

function rondA() {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(rond1.style.backgroundColor = "red")
        },2000)
    })
}
function rondB() {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(rond2.style.backgroundColor = "orange")
        },1000)
    })
}
function rondC() {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(rond3.style.backgroundColor = "green")
        },3000)
    })
}

function feuTri() {
    rondC().then(rond4=>{
        rondB().then(rond5=>{
            rondA().then(rond6=>{
                return feuTri
            })
        })
    })
}
feuTri()