let result = 0;
function ageInTime(theAge) {
    if(10 > theAge || theAge > 100 ){
        console.log("Age Out Of Range");
    }
    else{
        console.log(`Age is ${theAge} years`)
        console.log(`Age is ${theAge * 12} Months`)
        console.log(`Age is ${theAge * 12 * 30} days`)
        console.log(`Age is ${theAge * 12 * 30 * 24} hours`)
        console.log(`Age is ${theAge * 12 * 30 * 24 * 60} minute`)
        console.log(`Age is ${theAge * 12 * 30 * 24 * 60 * 60} second`)
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months