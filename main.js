let myDiv = document.querySelector(".our-element");
let myP = document.querySelector("p");
let startDiv = document.createElement("div");
let endDiv = document.createElement("div");
let startText = document.createTextNode("Start");
let endText = document.createTextNode("end");

startDiv.appendChild(startText);
endDiv.appendChild(endText);

startDiv.className = "start";
endDiv.className = "end";

startDiv.setAttribute("title", "Start Element");
endDiv.setAttribute("title", "End Element");
startDiv.setAttribute("data-value", "Start");
endDiv.setAttribute("data-value", "End");

myP.remove();

myDiv.before(startDiv)
myDiv.after(endDiv)


