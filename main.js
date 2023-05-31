let result = 0;

function calculate(firstNum, secondNum = " Second Number Not Found", operation) {
    if(operation === 'add'){
        result = firstNum + secondNum ;
    }
    else if (operation === 'subtract'){
        result = firstNum - secondNum ;
    }
    else if (operation === 'multiply'){
        result = firstNum * secondNum ;
    }
    else{
        result = firstNum + secondNum ;
    }
    console.log(result)
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600