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

const display = document.getElementById("display");

const inputNumber = function(a) {
    display.textContent += a;
    return display.textContent;
}

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