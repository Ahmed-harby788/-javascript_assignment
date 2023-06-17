let div = document.createElement("div");
let cunter = 10;

let ruselt = setInterval(function (){
    document.body.appendChild(div);
    div.innerHTML = cunter
    cunter = cunter - 1;

    if(div.innerHTML == 5){
        open("https://elzero.org/", "", "hight=700, width= 700");
    }

    cunter < 0 ?clearInterval(ruselt) : "";
    
},1000)
