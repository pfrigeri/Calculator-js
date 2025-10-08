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

//global variables
let number1 = 0;
let operator = '';
let number2 = 0;

const operate = (op, num1, num2) => {
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            alert("Choose a valid operator !")
    }
}

//populate the display with the buttons

const display = document.querySelector('.display')

let displayText = document.querySelector('.display h1');
let displayValue = 0;

displayText.textContent = displayValue;

const appendNumber = (number) => {
    if (displayValue == '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }

    if (operator != '') {
        displayText.textContent = `${number1} ${operator} ${displayValue}`
    } else {
        displayText.textContent = displayValue;
    }
}

const numberButtons = document.querySelectorAll('.numbers .buttons');
const operatorButtons = document.querySelectorAll('.operators .buttons')
const clearBtn = document.querySelector('#clear')

//negative numbers use case
//make the text start from the right and get pushed left as it's added

numberButtons.forEach(btn => btn.addEventListener('click', () => {
    appendNumber(btn.textContent);
}))

operatorButtons.forEach(btn => btn.addEventListener('click', () => {
    if (btn.textContent != '=') {
        operator = btn.textContent;
        if (Number.isInteger(displayValue)) {
            number1 = Number.parseInt(displayValue);
        }
        else {
            number1 = Number.parseFloat(displayValue);
        }
        displayText.textContent = `${displayValue} ${operator} `
        displayValue = 0;
    } else if (operator == '') {
        alert("Select a valid operator !");
    } else {
        if (Number.isInteger(displayValue)) {
            number2 = Number.parseInt(displayValue);
        }
        else {
            number2 = Number.parseFloat(displayValue);
        }
        let result = operate(operator, number1, number2)
        displayText.textContent = `${number1} ${operator} ${number2} = ${result}`
        displayValue = 0;
        number1 = 0;
        operator = '';
        number2 = 0;
    }
}))

clearBtn.addEventListener('click', () => {
    displayText.textContent = '';
    displayValue = 0;
    number1 = 0;
    operator = '';
    number2 = 0;
    //displayText.textContent = displayValue;
})

