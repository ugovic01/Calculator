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

