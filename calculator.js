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
  if (b === 0) {
    alert("Cannot divide by zero!");
    return null;
  }
  return a / b;
}

// --- Display and input logic ---
const display = document.getElementById("display");
let currentInput = "";

// Select all buttons
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    if (value === "=") {
      // We'll handle calculations later
      return;
    }

    // Add button value to input and update display
    currentInput += value;
    display.textContent = currentInput;
  });
});
