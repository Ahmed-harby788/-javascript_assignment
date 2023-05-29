let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)){
    console.log("found")
}
if (haystack.indexOf(needle)){
    console.log("found")
}
if (haystack[1] === needle){
    console.log("found")
}