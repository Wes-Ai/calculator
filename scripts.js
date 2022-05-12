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