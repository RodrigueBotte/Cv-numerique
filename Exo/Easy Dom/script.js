"use strict"

import EasyDom from "./esaydom.js"

const d = new EasyDom()

d.tag("div")
console.log(d.select("span"));
const sp ="span"
console.log(sp>1);
d.event("span")

