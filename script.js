const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const divideButton = document.getElementById("divideButton");
const multiplyButton = document.getElementById("multiplyButton");
const equalsButton = document.getElementById("equalsButton");

let firstNum = 0;
let secondNum = 0;
let displayValue;



function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);

        case "-":
            return subtract(firstNum, secondNum);

        case "/":
            return divide(firstNum, secondNum);

        case "multiply":
            return multiply(firstNum, secondNum);

        default:
            return null;
    }
}



function clearAll() {

}

