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
    aNum = parseInt(a);
    bNum = parseInt(b);
    console.log(operator, a, b);
    if (operator == '+') {
        result = add(aNum, bNum);
    }
    else if (operator == '-') {
        result = subtract(aNum, bNum);
    }
    else if (operator == '*') {
        result = multiply(aNum, bNum);
    }
    else if (operator == '/') {
        result = divide(aNum, bNum);
    }
    display.textContent = result;
}

let display = document.querySelector('.display');
let clear = document.querySelector('#clear')
let equals = document.querySelector('#equals')
let numberButtons = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operator');

let currentInput = 0;
let currentOperator;
let a;
let b;
let result;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.innerText;
        currentInput += button.innerText;
    })
})

operationButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperator = operator.innerText;
        display.textContent = '';
        if (result !== undefined) { // this ensures that it's not the first calculation
            a = result;
        }
        else {       
            a = currentInput;
        }
        currentInput = 0;
    })
})

equals.addEventListener('click', () => {
    b = currentInput;
    operate(currentOperator, a, b);
    currentOperator = null;
});

clear.addEventListener('click', () => {
    display.textContent = '';
    a = 0;
    b = 0;
    currentInput = 0;
    result = undefined;
})