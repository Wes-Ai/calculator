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

// Create DOM elements
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const equals = document.getElementById("equals");
const slash = document.getElementById("slash");
const pound = document.getElementById("pound");
const dash = document.getElementById("dash");
const cross = document.getElementById("cross");

const display = document.getElementById("display");



let mainVal = '';
let secVal = '';
let currentOperator = '';
let prevOperator = '';
let onceOperator = false;

const mainUpdate = function(a) {
    checkBadDisplay();
    mainVal = mainVal + a;
    displayUpdate(mainVal);
}

const checkBadDisplay = function() {
    if(display.textContent === 'ERROR' || display.textContent === 'NaN') {
        mainVal = '';
        display.textContent === '';
    }
}
const displayUpdate = function(a) {
    checkBadDisplay();
    display.textContent = a;
}

const operatorPressed = function(a) {
    currentOperator = a;
    if(onceOperator === false) {
        onceOperator = true;
        secVal = mainVal;
        mainVal = '';
        prevOperator = a;
    } // need to pass in prev operator if operator is pressed twice
    else {
        equalPressed(prevOperator);
        onceOperator = false;
        operatorPressed(currentOperator);
    }
}

const equalPressed = function(funcOperator) {
    console.log('Main value: ' + mainVal);
    console.log('Sec value: ' + secVal);
    console.log('Func operator value: ' + funcOperator);
    console.log('Operator value: ' + currentOperator);
    console.log('Prev operator value: ' + prevOperator);
    const sum = operate(funcOperator, secVal, mainVal);
    mainVal = sum;
    secVal = '';
    onceOperator = false;
    displayUpdate(mainVal);
}



equals.addEventListener('click', () => equalPressed(currentOperator));

slash.addEventListener('click', () => operatorPressed('/'));
pound.addEventListener('click', () => operatorPressed('*'));
dash.addEventListener('click', () => operatorPressed('-'));
cross.addEventListener('click', () => operatorPressed('+'));

zero.addEventListener('click', () => mainUpdate('0'));
one.addEventListener('click', () => mainUpdate('1'));
two.addEventListener('click', () => mainUpdate('2'));
three.addEventListener('click', () => mainUpdate('3'));
four.addEventListener('click', () => mainUpdate('4'));
five.addEventListener('click', () => mainUpdate('5'));
six.addEventListener('click', () => mainUpdate('6'));
seven.addEventListener('click', () => mainUpdate('7'));
eight.addEventListener('click', () => mainUpdate('8'));
nine.addEventListener('click', () => mainUpdate('9'));