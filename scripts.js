const add = function(a, b) {
    return (+b + +a);
};

const subtract = function(a, b) {
	return (a - b);
};

const multiply = function(arr) {
    return arr.reduce((prevVal, currentVal) => prevVal * currentVal); 
};

const divide = function(arr) {
    return arr.reduce((prevVal, currentVal) => prevVal / currentVal); 
};

const operate = function(operator, a, b) {
    a = Number(a);
    b = Number(b);
    
    if(operator === "+") {
        return add(a,b);
    }
    else if(operator === "-") {
        return subtract(a,b);
    }
    else if(operator === "*") {
        return multiply([a,b]);
    }
    else if(operator === "/") {
        return divide([a,b]);
    }
    else {
        return "ERROR";
    }
}

let firstNum = '';
let secondNum = '';
let currentOperator = null;
const display = document.getElementById("display");

const updateDisplay = function(text) {
    display.textContent = text;
}

const addToNum = function(num) {
    if(currentOperator === null) {
        firstNum = firstNum + num;
        updateDisplay(firstNum);
    }
    else {
        secondNum = secondNum + num;
        updateDisplay(secondNum);
    }
    //console.log(firstNum + ' and ' + secondNum);
}

const evaluate = function() {
    //console.log(currentOperator + ' operator and num: ' + secondNum)
    if(currentOperator === null) return;
    else if(currentOperator === '/' && secondNum === '0') {
        clearData();
        updateDisplay('Only real eyes realize real lies.');
    }
    else if (secondNum === '') return;
    else {
        //Sum of operation, rounds to 5 decimal places.
        firstNum = Number(operate(currentOperator, firstNum, secondNum).toFixed(5));
        currentOperator = null;
        secondNum = '';
        updateDisplay(firstNum);
    }
}

const clearData = function() {
    firstNum = '';
    secondNum = '';
    currentOperator = null;
    updateDisplay('0');
}


// Thank you to Aliaksandr Sushkevich
// For simplified Event Listener logic.
// https://stackoverflow.com/questions/49680484
const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  //Determines what the user pressed; and runs connected logic.
  //Short for "button".
  const butt = event.target.id;
  if(!isNaN(butt)) {
      addToNum(butt);
  }
  else if(butt==='+' || butt==='-' || butt==='*' || butt==='/') {
    if(currentOperator === null) {
        currentOperator = butt;
    }
    else {
        evaluate();
        currentOperator = butt;
    }
  }
  else if(butt==='=') {
    evaluate();
  }
  else if(butt==='clr') {
    clearData();
  }
})