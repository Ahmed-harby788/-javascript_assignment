let images = document.getElementsByTagName("img");

console.log(images)

for(i = 0; i < images.length; i++){
    if(images[i].hasAttribute("alt")){
        images[i].alt = "old";
    }else{
        images[i].setAttribute("alt", "Elzero New")
    }
}