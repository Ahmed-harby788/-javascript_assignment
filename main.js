let number = document.querySelector("[name = elements]")
let text = document.querySelector("[name = texts]")
let selector = document.querySelector("select")
let optDiv = document.querySelector("select option[value = Div]")
let optselect = document.querySelector("select option[value = select]")
let submit = document.querySelector("input [type = submit]")
let result = document.querySelector(".results")
result.style.cssText = "display: flex; flex-wrap: wrap;"
document.forms[0].onsubmit = function (e){
    result.innerHTML = "";
    e.preventDefault();

    for(i = 0; i < number.value; i++){
        let newEle = document.createElement(selector.value);
        newEle.innerHTML = text.value
        newEle.id = `id-${i + 1}`
        newEle.style.cssText = "background-color: red; color: white;text-align: center; border-radius: 10px; padding: 10px; margin: 10px;"
        result.appendChild(newEle)

    }

}

