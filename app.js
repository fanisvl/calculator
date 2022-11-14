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
    console.log('operate function:', operator, a, b);
    if (operator == '+') {
        return add(aNum, bNum);
    }
    else if (operator == '-') {
        return subtract(aNum, bNum);
    }
    else if (operator == '*') {
        return multiply(aNum, bNum);
    }
    else if (operator == '/') {
        return divide(aNum, bNum);
    }
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
let firstCalculation = true;
let clearPreviousResult;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (clearPreviousResult == true) {
            display.textContent = ''
            currentInput = 0;
            clearPreviousResult = false;
        }
        display.textContent += button.innerText;
        currentInput += button.innerText;
    })
})

operationButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        if (firstCalculation == true) {
            display.textContent = ''
            a = currentInput;
            currentInput = 0;
            currentOperator = operator.innerText;
            console.log(a);
            console.log(currentOperator);
            firstCalculation = false;
        }
        else {
            b = currentInput;
            a = operate(currentOperator, a, b)
            display.textContent = a;
            currentOperator = operator.innerText;
            console.log('a after is ' + a);
            console.log('b is ' + b);
            clearPreviousResult = true;
        }
    })
})

equals.addEventListener('click', () => {
    b = currentInput;
    display.textContent = operate(currentOperator, a, b);
});

clear.addEventListener('click', () => {
    display.textContent = '';
    a = 0;
    b = 0;
    currentInput = 0;
})