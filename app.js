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
    console.log(typeof(a));
    if (operator == '+') {
        console.log(add(aNum, bNum));
    }
    else if (operator == '-') {
        subtract(aNum, bNum);
    }
    else if (operator == '*') {
        multiply(a, b);
    }
    else if (operator == '/') {
        divide(a, b);
    }
    else {
        console.log('error in operate if');
    }
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

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.innerText;
        currentValue += button.innerText;
    })
})

operationButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperator = operator.innerText; // variable for operate function
        display.textContent = ''; // clear screen
        a = currentValue;
        currentValue = 0; // reset current Value
    })
})

equals.addEventListener('click', () => {
    b = currentValue;
    operate(currentOperator, a, b);
});





