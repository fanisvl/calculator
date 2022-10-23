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

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract(a, b);
    }
    else if (operator == '*') {
        return multiply(a, b);
    }
    else if (operator == '/') {
        return divide(a, b);
    }
}

let display = document.querySelector('.display');
let num0 = document.querySelector('#zero')
let num1 = document.querySelector('#one')
let num2 = document.querySelector('#two')
let num3 = document.querySelector('#three')
let num4 = document.querySelector('#four')
let num5 = document.querySelector('#five')
let num6 = document.querySelector('#six')
let num7 = document.querySelector('#seven')
let num8 = document.querySelector('#eight')
let num9 = document.querySelector('#nine')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let mul = document.querySelector('#mul')
let div = document.querySelector('#div')
let clear = document.querySelector('#clear')
let displayValue = '0';

num0.addEventListener('click', () => {
    display.textContent = '0';
    displayValue += '0';
})

