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
let num0 = document.querySelector('#0')
let num1 = document.querySelector('#1')
let num2 = document.querySelector('#2')
let num3 = document.querySelector('#3')
let num4 = document.querySelector('#4')
let num5 = document.querySelector('#5')
let num6 = document.querySelector('#6')
let num7 = document.querySelector('#7')
let num8 = document.querySelector('#8')
let num9 = document.querySelector('#9')
let add = document.querySelector('#+')
let sub = document.querySelector('#-')
let mul = document.querySelector('#*')
let div = document.querySelector('#/')
let displayValue;

