let selectFont = document.querySelector("#select__font");
let selectColor = document.querySelector("#select__color");
let selectFontSize  = document.querySelector("#select__fontSize");

selectFont.addEventListener("change", (e) => {
    window.localStorage.setItem("font", selectFont.value);
    document.body.style.fontFamily = localStorage.getItem("font");
})
selectColor.addEventListener("change", (e) => {
    window.localStorage.setItem("color", selectColor.value);
    document.body.style.color = localStorage.getItem("color");
})
selectFontSize.addEventListener("change", (e) => {
    window.localStorage.setItem("size", selectFontSize.value);
    document.body.style.fontSize = localStorage.getItem("size");
})
document.body.style.fontFamily = localStorage.getItem("font");
document.body.style.color = localStorage.getItem("color");
document.body.style.fontSize = localStorage.getItem("size");

selectFont.value = localStorage.getItem("font");
selectColor.value = localStorage.getItem("color");
selectFontSize.value = localStorage.getItem("size");