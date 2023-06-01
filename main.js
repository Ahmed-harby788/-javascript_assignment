let result = 0;

function multiply (...number){
    for(i = 0; i < number.length; i++ ){
        if(typeof number[i] === "string"){
            continue;
        }else{
            result = parseInt(number[i - 1]) * parseInt(number[i])
        }
    }
    return result; 
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000