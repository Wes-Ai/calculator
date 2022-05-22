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

const wrapper = document.getElementById('wrapper');

// Thank you to Aliaksandr Sushkevich
// For simplified Event Listener logic.
// https://stackoverflow.com/questions/49680484
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  // if(its a number)
  //    act on number logic
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
  console.log(event.target.id);
})