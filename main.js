// alert("hello")


// let a = confirm("Are you shour")
// console.log(a)

// prompt("can you write this code");
// console.log(prompt("can you write this code"))

// setTimeout( myTimeout => {
//     document.getElementById("demo").innerHTML = "Happy Birthday!"
// }, 5000);

// function clearTime(){
//     clearTimeout(myTimeout)
// }
// setTimeout(function () {
//     window.open("https://google.com", "_blank", "height=500,width=500,")
// }, 2000)

// let  = window.open("https://google.com", "", "width=500,height=500")










// let msg = prompt("Print Number From - To","Example: 5-20");
// let arrMsg = msg.split("-");

// // console.log(arrMsg);

// let start, end;

// if(+arrMsg[0] < +arrMsg[1]){
//     start=+arrMsg[0];
//     end=+arrMsg[1]
// } else if (+arrMsg[0] > +arrMsg[1]){
//     start=+arrMsg[1];
//     end=+arrMsg[0]
    
// } else{
//     alert("enter correct number")
// }


// function range(size, startAt = 0) {
//     return [...Array(+size).keys()].map(i => i + startAt);
// }



// function inputNumber (start, end){

//     let size = end-start+1;
//     let arr = range(size, start)

//     arr.map(el => console.log(el))
// }

// inputNumber(start, end);





let promptMsg1 = prompt("Print Number From - To", "Example: 5-20");

let sortMsg1 = promptMsg.split("-").sort((a, b) => a - b);

for (i = sortMsg[0]; i <= sortMsg[1]; i++){
    document.write(`${i} <br>`);
} 




// let promptMsg = prompt("Print Number From - To", "Example: 5-20");

// let sortMsg = promptMsg.trim().split("-");

// console.log(sortMsg);

// sortMsg.reduce(function (acc, curr) {
//     if (+acc > +curr) {
//     for (i = +curr; i <= +acc; i++) {
//         document.write(`${i} <br>`);
//     }
//     } else {
//     for (i = +acc; i <= +curr; i++) {
//         document.write(`${i} <br>`);
//     }
//     }
// });