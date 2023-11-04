const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const divideButton = document.getElementById("divideButton");
const multiplyButton = document.getElementById("multiplyButton");
const equalsButton = document.getElementById("equalsButton");

const zeroButton = document.getElementById("zeroButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");

const displayValue = document.getElementById("displayValue");
const newValue = document.getElementById("newValue");

let firstNum = 0;
let secondNum = 0;

function numberCall(number, appended) {
    
}

function defaultScreen() {
    displayValue.textContent = "0";
}

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

defaultScreen();
