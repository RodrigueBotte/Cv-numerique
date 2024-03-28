"use strict"

export default class EasyDom {
    /**
     * 
     * @param {string} sa 
     * @param {string} sp 
     * @param {string} sd 
     * @returns 
     */
    tag(sa) {
        const pq = document.createElement(sa);
        return document.body.append(pq)
    }
    select(sp) {
        if (document.querySelectorAll(sp).length > 1) {
            const pf = document.querySelectorAll(sp)
            return pf
        }
        else {
            const pf = document.querySelector(sp)
            return pf
        }
    }
    event(sd){
        document.querySelector(sd).addEventListener("click", ()=>{
            console.log("Super");
        })
    }
}

