const operatorButtons = document.querySelectorAll('[data-operator]');
const numberButtons = document.querySelectorAll('[data-number]');

const liveField = document.getElementById("liveField");
const previousOperand = document.getElementById("displayValue");
const newValue = document.getElementById("newValue");

let firstNum = 0;
let secondNum = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        liveField.textContent += button.innerHTML;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        liveField.textContent += button.innerHTML;
    })
})

function appendNumber(number) {
    
}


function defaultScreen() {
    previousOperand.textContent = "0";
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
