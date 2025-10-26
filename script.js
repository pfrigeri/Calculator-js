//basic operation functions
const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    if (num1 == 0 || num2 == 0) {
        return 0;
    }
    return num1 * num2;
}

const divide = (num1, num2) => {
    if (num1 == 0 && num2 == 0) return "Undefined";
    else if (num1 == 0 && num2 != 0) return 0;
    else if (num1 != 0 && num2 == 0) return Infinity;

    return num1 / num2;
}

const operate = (op, num1, num2) => {
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case '÷':
            if(Number.isInteger(divide(num1, num2))){
                return divide(num1, num2);
            } else {
                return divide(num1, num2).toFixed(2);
            }

        default:
            alert("Choose a valid operator !")
    }
}

const evaluate = () => {
    if (operator === null || number1 === null) {
            return;
        }
        const number2 = Number(displayValue);
        const result = operate(operator, number1, number2);
        displayText.textContent = result;

        displayValue = result.toString();
        number1 = null;
        operator = null;
        shouldResetDisplay = true;
        return;
}
const display = document.querySelector('.display')

let displayText = document.querySelector('.display h1');

//global variables
let displayValue = '0';
let number1 = null;
let operator = null;
let number2 = null;

displayText.textContent = displayValue;

const appendNumber = (number) => {
    if (displayValue === '0' || shouldResetDisplay) {
        displayValue = number;
        shouldResetDisplay = false;
    } else {
        displayValue += number;
    }
    displayText.textContent = displayValue;
}

const numberButtons = document.querySelectorAll('.numbers .buttons');
const operatorButtons = document.querySelectorAll('.operators .buttons')
const clearBtn = document.querySelector('#clear')
const backspaceBtn = document.querySelector('#backspace');

numberButtons.forEach(btn => btn.addEventListener('click', () => {
    appendNumber(btn.textContent);
}))

operatorButtons.forEach(btn => btn.addEventListener('click', () => {
   const clickedOperator = btn.textContent;

    if (clickedOperator === '=') {
        evaluate();
        return;
    }
    // For operadors (+, -, etc.)
    else{
        if (operator !== null) {
            const number2 = Number(displayValue);
            number1 = operate(operator, number1, number2);
        } else {
            number1 = Number(displayValue);
        }
        operator = clickedOperator;
        shouldResetDisplay = true; 
        displayText.textContent = `${number1} ${operator}`;
    }
}))

clearBtn.addEventListener('click', () => {
    displayValue = '0';
    number1 = null;
    operator = null;
    shouldResetDisplay = false;
    displayText.textContent = displayValue;
    
})

backspaceBtn.addEventListener('click', () => {
    if (shouldResetDisplay) return;

    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } 
    else {
        displayValue = '0';
    }

    displayText.textContent = displayValue;
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        evaluate();
    }
    if (event.key === 'Backspace'){
        event.preventDefault();
        backspaceBtn.click();
    }
});