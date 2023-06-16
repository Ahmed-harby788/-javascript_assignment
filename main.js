let div = document.createElement("div");
let cunter = 10;

// div.apped(cunter);

let ruselt = setInterval(function (){
    document.body.appendChild(div);
    div.innerHTML = cunter
    cunter = cunter - 1;

    if(cunter < 0){
        clearInterval(ruselt); 
    }
},1000)

// for (i = 10; i >= 0; i--){
//     console.log(i)
// }