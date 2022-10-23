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
        display.textContent = add(aNum, bNum);
    }
    else if (operator == '-') {
        display.textContent = subtract(aNum, bNum);
    }
    else if (operator == '*') {
        display.textContent = multiply(aNum, bNum);
    }
    else if (operator == '/') {
        display.textContent = divide(aNum, bNum);
    }
    result = display.textContent;
}

let display = document.querySelector('.display');
let clear = document.querySelector('#clear')
let equals = document.querySelector('#equals')
let numberButtons = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operator');

let currentValue = 0;
let currentOperator;
let a;
let b;
let result;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.innerText;
        currentValue += button.innerText;
    })
})

operationButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        if (result !== undefined) { // this insures that it's the first calculation
            currentOperator = operator.innerText;
            display.textContent = '';
            a = result;
            currentValue = 0;
        }
        else {
            currentOperator = operator.innerText;
            display.textContent = '';
            a = currentValue;
            currentValue = 0;
        }
    })
})

equals.addEventListener('click', () => {
    b = currentValue;
    operate(currentOperator, a, b);
    currentOperator = null;
});

clear.addEventListener('click', () => {
    display.textContent = '';
    a = 0;
    b = 0;
    currentValue = 0;
    result = undefined;
})



