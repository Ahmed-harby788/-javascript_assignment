let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop(); my.pop(); my.reverse()
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]

console.log(my[1].substring(0,2) + my[2].slice(2)); // "Elzero"

console.log(my[2].slice(4, 5) + my[2].slice(5).toUpperCase()); // "rO"