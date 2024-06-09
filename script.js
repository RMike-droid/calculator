let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let displayValue = '0';

const display = document.getElementById('display');

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (currentOperator === null) {
        firstNumber += value;
        displayValue = firstNumber;
    } else {
        secondNumber += value;
        displayValue = secondNumber;
    }
    updateDisplay();
}

function setOperator(operator) {
    if (firstNumber && secondNumber) {
        calculateResult();
    }
    currentOperator = operator;
}

function calculateResult() {
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (currentOperator === '/' && num2 === 0) {
        displayValue = 'Error: Division by 0';
        updateDisplay();
        return;
    }

    switch (currentOperator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            return;
    }

    firstNumber = result.toString();
    secondNumber = '';
    currentOperator = null;
    displayValue = result;
    updateDisplay();
}

function updateDisplay() {
    display.value = displayValue;
}

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
    return a / b;
}