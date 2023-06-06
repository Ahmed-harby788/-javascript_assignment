console.log(document.querySelector(".element"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("[name = js]"));
console.log(document.querySelector("[class = element]"))

console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("[name = js]")[0]);
console.log(document.querySelectorAll("[class = element]")[0])

console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByClassName("element")['js']);
console.log(document.getElementsByClassName("element")['elzero']);

console.log(document.getElementsByTagName("div")[0])
console.log(document.getElementsByTagName("div")['js'])
console.log(document.getElementsByTagName("div")['elzero'])

console.log(document.getElementById("elzero"));
console.log(document.getElementsByName("js")[0]);