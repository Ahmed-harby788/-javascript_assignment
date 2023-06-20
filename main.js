let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newArray = new Set(myFriends.sort());
console.log(newArray);

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']