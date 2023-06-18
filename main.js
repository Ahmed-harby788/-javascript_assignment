let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");

if(window.localStorage.getItem("color")){
    div.style.backgroundColor = window.localStorage.getItem("color");
    
}

lis.forEach((li) => {
    li.addEventListener("click", (el) => {
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        window.localStorage.setItem("color", el.target.dataset.color);
        el.target.classList.add("active");
        div.style.backgroundColor = window.localStorage.getItem("color");
    
    })
});