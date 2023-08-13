// let MyReq = new XMLHttpRequest();
// MyReq.open("Get", "https://api.github.com/users/Ahmed-harby788");
// MyReq.send();
// // console.log(MyReq);

//   MyReq.onreadystatechange = function () {
//     if(this.readyState === 4 && this.status === 200){
//       console.log(this.responseText)
    
//     let jsMyReq = JSON.parse(this.responseText);
//     console.log(jsMyReq);

//     for(let i = 0; i < jsMyReq.length; i++){
//       console.log(jsMyReq[i])
//       let div = document.createElement("div")
//       let reboName = document.createTextNode(jsMyReq)
//       div.appendChild(reboName)
//       document.body.appendChild(div);
//     }
//   }
// }



let MyReq = new XMLHttpRequest();
MyReq.open("Get","articles.json");
MyReq.send();

MyReq.onreadystatechange = function () {
  if(this.readyState === 4 && this.status === 200){
    console.log(this.responseText)
    setTimeout(() => {
      console.log("Data Loaded")
    }, 0);
  }
}

// console.log(MyReq);