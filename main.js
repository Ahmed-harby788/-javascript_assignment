for(i = 0; i < 100; i++){
let myDive = document.createElement("div")
let myh2 = document.createElement("h2")
let myp = document.createElement("p")

let myHeading= document.createTextNode(`product title ${i + 1}`)
let myPText = document.createTextNode(`product text ${i + 1}`)

myDive.className = "product"
myh2.appendChild(myHeading);
myp.appendChild(myPText);
myDive.appendChild(myh2);
myDive.appendChild(myp);

document.body.appendChild(myDive);
}
