const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const divideButton = document.getElementById("divideButton");
const multiplyButton = document.getElementById("multiplyButton");
const equalsButton = document.getElementById("equalsButton");

let firstNum = 0;
let secondNum = 0;
let operator;
let result;



function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract (firstNum, secondNum) {
    return firstNum - secondNum;
}

function divide (firstNum, secondNum) {
    return firstNum / secondNum;
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
}

function operate (operator, firstNum, secondNum) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-": 
            return subtract(a, b);
        case "/":
            return divide(a, b);
        case "multiply":
            return multiply(a, b);
        default:
            return null;
    }
}


function clearAll () {
    
}

