const add = function(a, b) {
    return a + b;
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
    if(operator === "+") {
        return add(a,b);
    }
    else if(operator === "-") {
        return subtract(a,b);
    }
    else {
        return "Operation: ERROR";
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

//Main value
    //Update display when updated
    //Store in variable

//Operator pressed
    //Display still same
    //Clear main value to sec (secondary)

//Equals pressed
    //Operate on main + sec
    //Main == answer (run main value?)







let operatorChosen = 0;

equals.addEventListener('click', () => equalPress(operatorChosen));
slash.addEventListener('click', () => operatorChosen = operatorPress('/'));
pound.addEventListener('click', () => operatorChosen = operatorPress('*'));
dash.addEventListener('click', () => operatorChosen = operatorPress('-'));
cross.addEventListener('click', () => operatorChosen = operatorPress('+'));

zero.addEventListener('click', () => inputNumber(zero.textContent));
one.addEventListener('click', () => inputNumber(one.textContent));
two.addEventListener('click', () => inputNumber(two.textContent));
three.addEventListener('click', () => inputNumber(three.textContent));
four.addEventListener('click', () => inputNumber(four.textContent));
five.addEventListener('click', () => inputNumber(five.textContent));
six.addEventListener('click', () => inputNumber(six.textContent));
seven.addEventListener('click', () => inputNumber(seven.textContent));
eight.addEventListener('click', () => inputNumber(eight.textContent));
nine.addEventListener('click', () => inputNumber(nine.textContent));