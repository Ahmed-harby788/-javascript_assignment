
function model (){
    let box = document.createElement("div");
    let close = document.createElement("div");
    let h2 = document.createElement("h2");
    let tH2 = document.createTextNode("Welcome");
    let p = document.createElement("p");
    let pText = document.createTextNode("Welcome to Elzero Web School");
    let tClose = document.createTextNode("x");

    box.className = "box";
    close.className = "close"

    h2.append(tH2);
    p.append(pText);
    close.append(tClose);

    box.append(close, h2, p);

    document.body.append(box);
}

function close(){
    let divBox = document.querySelector(".box");
    let divclose = document.querySelector(".close");
    let btnOpen = document.querySelector("button");

    divclose.addEventListener("click", (ele) => {
        divBox.remove();
    });
    };
setTimeout(model, 1000)  
setTimeout(close, 1000)  