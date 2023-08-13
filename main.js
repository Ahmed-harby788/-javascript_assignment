let MyReq = new XMLHttpRequest();
MyReq.open("Get","articles.json");
MyReq.send();

MyReq.onreadystatechange = function () {
  if(this.readyState === 4 && this.status === 200){
    let mainData = JSON.parse(this.responseText);
    for(let i = 0; i < mainData.length; i++){
      mainData[i].category = "All"
    }
    console.log(mainData);
    console.log(typeof mainData);
  }
  let updatedData = JSON.stringify(mainData);
  console.log(updatedData);
}

