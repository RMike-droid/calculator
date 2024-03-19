let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector("#clear");
    let equals = document.querySelector("#equals");
    let decimal = document.querySelector("#decimal");

    let numbers = document.querySelectorAll(".number");
    let operator = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent)
    }))
});

function handleNumber(num) {
    currentValue += num;
}