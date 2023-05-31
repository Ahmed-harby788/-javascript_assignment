let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length;

for(i = 0; i < friends.length; i++){
    if(!friends[i].toLowerCase().startsWith(letter)){
        console.log(`${count} => ${friends[i]}`)
        count++
    }
    
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"