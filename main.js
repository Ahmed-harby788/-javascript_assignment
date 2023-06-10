let divTwo = document.querySelector(".two");
let divOne = document.querySelector(".one");

let oneAtrr = divOne.getAttribute("title"); //two
let twoAtrr = divTwo.getAttribute("title"); //one

let divLength = document.getElementsByTagName("div").length;


divOne.setAttribute("title", twoAtrr);
divTwo.setAttribute("title", oneAtrr);

divOne.innerHTML = twoAtrr
divTwo.innerHTML = `${oneAtrr}${divLength}` 
