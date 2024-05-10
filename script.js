// DOM Elements
const numbers = document.querySelector(".number-container");
const operations = document.querySelector(".operations-container");
const output = document.querySelector(".display");

// Event Handlers
numbers.addEventListener("click", e => {
    let num = e.target.textContent;
    output.textContent = num;
});

operations.addEventListener("click", e => {
    let operation = e.target.textContent;
    output.textContent = operation;
});