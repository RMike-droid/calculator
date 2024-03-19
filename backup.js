console.log('hello');
let numberOne = "";
let numberTwo = "";
let operator;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "For real??" : a / b;

function operate(a, opr, b) {
    switch(opr) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return null;
    }
}

let displayValue = document.querySelectorAll('button');

displayValue.forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.innerHTML
    })
});