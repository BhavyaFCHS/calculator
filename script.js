// DOM Elements
const numpad = document.querySelector(".number-container");
const operationsPad = document.querySelector(".operations-container");
const output = document.querySelector(".display");
const options = document.querySelector(".options");

// Calculator objects
const numbers = {
    one : 1, 
    two : 2, 
    three : 3, 
    four : 4,
    five : 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9,
    zero : 0,
};

const operations = {
    add : "+", 
    subtract : "-", 
    multiply : "*", 
    divide : "/",
};

// Array storing the current calculation
let calculation = "";

// Event Handlers
numpad.addEventListener("click", e => {
    let num = e.target.id;
    if(num in numbers) {
        calculation += numbers[num];
    }
    output.textContent = calculation;
});

operationsPad.addEventListener("click", e => {
    let operation = e.target.id;
    if(operation in operations) {
        calculation += operations[operation];
    }
    output.textContent = calculation;
});

options.addEventListener("click", e => {
    switch(e.target.id) {
        case "clear":
            calculation = "";
            output.textContent = calculation;
            break;
        case "evaluate":
            output.textContent = evaluateCalculation();
            calculation = "";
            break;
    }
});

function evaluateCalculation() {
    if(calculation.includes("+")) {

        let array = calculation.split("+");
        return array.map(str => +str)
                    .reduce((sum, i) => sum + i);

    } else if(calculation.includes("-")) {

        let array = calculation.split("-");
        return array.map(str => +str)
                    .reduce((sum, i) => sum - i);

    } else if(calculation.includes("*")) {

        let array = calculation.split("*");
        return array.map(str => +str)
                    .reduce((sum, i) => sum * i);

    } else if(calculation.includes("/")) {

        let array = calculation.split("/");
        return array.map(str => +str)
                    .reduce((sum, i) => sum / i);

    } else {
        return calculation;
    }
}