let dateNow = new Date();
let birthday = new Date("April 20, 94");

let myAge = dateNow - birthday;

console.log(`${(myAge / 1000).toFixed()} Seconds`);
console.log(`${(myAge / 1000 / 60).toFixed()} Minutes`);
console.log(`${(myAge / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(myAge / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(myAge / 1000 / 60 / 60 / 24 / 30).toFixed()} Months`);
console.log(`${(myAge / 1000 / 60 / 60 / 24 / 365).toFixed()} Years`);

// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"