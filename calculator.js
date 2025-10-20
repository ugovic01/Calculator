let firstNumber;
let secondNumber;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
} 

//Test functions in the console
console.log("Add: ", add(5, 3));
console.log("Subtract: ", subtract(5, 3));
console.log("Multiply: ", multiply(5, 3));
try {
    console.log("Divide: ", divide(8, 2));
    console.log("Divide by zero: ", divide(8, 0));
} catch (err) {
    console.error(err.message);
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else {
        throw new Error("Invalid operator");
    }
}

 
