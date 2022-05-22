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
    console.log(firstNum + ' and ' + secondNum);
}

const evaluate = function() {
    firstNum = operate(currentOperator, firstNum, secondNum);
    currentOperator = null;
    secondNum = '';
    updateDisplay(firstNum);
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

  const butt = event.target.id;
  // if(its a number)
  //    act on number logic
  if(!isNaN(butt)) {
      //console.log('Its a number! ' + butt);
      addToNum(butt);
  }
  else if(butt==='+' || butt==='-' || butt==='*' || butt==='/') {
    //console.log('Its an operator! ' + butt);
    if(currentOperator === null) {
        currentOperator = butt;
    }
    else {
        evaluate();
        currentOperator = butt;
    }
  }
  else if(butt==='=') {
    console.log('Its an equals! ' + butt);
    evaluate();
  }
  else if(butt==='clr') {
    console.log('Its a clear! ' + butt);
  }
  else if(butt==='del') {
    console.log('Its a delete! ' + butt);
  }
  else if(butt==='.') {
    console.log('Its a dot! ' + butt);
  }

  // else if(its an operator + - / *)
  //    if(operator was previously pressed)
  //        evaluate.
  //        store operator
  //    else
  //        store operator
  // else if(its =)
  //    evaluate.
  // else if(its clr)
  //    clear all calc variables
  // ...
  // add ., del, etc.
  // ...
  //console.log(event.target.id);
})