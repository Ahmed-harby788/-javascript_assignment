let myImg = document.getElementsByTagName("img")

for(i = 0; i < myImg.length; i++){
    myImg[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    myImg[i].setAttribute("alt", "Elzero Logo");
    myImg[i].setAttribute("style", "background-color: black; width: 200px; height: 50x");
}