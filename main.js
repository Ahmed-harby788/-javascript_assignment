// Replace ? With Arithmetic Operators
console.log((10 * 20) + (15 % 3) + (190 + 10) - 400); // 0

//.....................................................................

let num = 3;

// Solution One
console.log(num * num -num); // 6

 // Solution Two
console.log(num + num); // 6

// Soultion Three
console.log(num + true + true + true); // 6

// Solution Five
console.log(num * num - true - true -true ); // 6

// Soultion Four
console.log(++num + true + true); // 6

// Solution Six
console.log(--num + num ); // 6

//....................................................................

let n1um = "10";

// Solution One
console.log(+n1um + +n1um); // 20

// Solution Two
console.log(+n1um * true + +n1um); // 20

// Solution Three
console.log(++n1um + +n1um -true -true); // 20

// Solution Four
console.log(--n1um + +n1um); // 20

//....................................................................

let points = 10;

// Write Your Code Here

console.log(points + true + true + true); // 13

// Write Your Code Here

console.log(points - true - true); // 8;