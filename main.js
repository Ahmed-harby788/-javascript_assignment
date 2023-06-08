let userInput = document.querySelector('[name="dollar"]');

let result = document.querySelector(".result");

userInput.oninput = function() {
    let calc =  userInput.value * 15.6;
    result.innerHTML = `{${userInput.value}} USD Dollar = {${calc.toFixed(2)}} Egyptian Pound`
}
