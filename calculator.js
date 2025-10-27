// Basic math functions
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
  if (b === 0) return "Error";
  return a / b;
}

// Operate function
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: return null;
  }
}

// DOM references
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;

// Populate display
numberButtons.forEach(button => {
  button.addEventListener('click', () => appendNumber(button.textContent));
});

function appendNumber(number) {
  if (display.textContent === '0' || shouldResetDisplay) {
    resetDisplay();
  }
  display.textContent += number;
}

function resetDisplay() {
  display.textContent = '';
  shouldResetDisplay = false;
}

// Handle operators
operatorButtons.forEach(button => {
  button.addEventListener('click', () => setOperation(button.textContent));
});

function setOperation(operator) {
  if (currentOperator !== null) evaluate();
  firstNumber = display.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

// Evaluate result
equalsButton.addEventListener('click', evaluate);

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  secondNumber = display.textContent;
  display.textContent = operate(currentOperator, firstNumber, secondNumber);
  currentOperator = null;
  shouldResetDisplay = true;
}

// Clear
clearButton.addEventListener('click', clear);

function clear() {
  display.textContent = '0';
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
}
