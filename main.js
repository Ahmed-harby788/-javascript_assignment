
let phone = "+(995)-123 (4567)";
let re = phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig);

console.log(re);