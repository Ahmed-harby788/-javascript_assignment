let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let {title : t, age : a, available : av, skills : [, sk]} = myFriends[chosen - 1];

if(chosen === 1){
    console.log(t);
    console.log(a);
    console.log(av ? "available" : "Not Available" );
    console.log(sk);
}
if(chosen === 2){
    console.log(t);
    console.log(a);
    console.log(av ? "available" : "Not Available" );
    console.log(sk);
}
if(chosen === 3){
    console.log(t);
    console.log(a);
    console.log(av ? "available" : "Not Available" );
    console.log(sk);
}
// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"