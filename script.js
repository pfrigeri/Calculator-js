//basic operation functions
const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    if(num1 == 0 || num2 == 0){
        return 0;
    }
    return num1 * num2;
}

const divide = (num1, num2) => {
    if(num1 == 0 && num2 == 0) return "Undefined"; 
    else if(num1 == 0 && num2 != 0) return 0;
    else if(num1 != 0 && num2 == 0) return Infinity;
    
    return num1 / num2;
}

//global variables
let number1 = 0;
let operator = '';
let number2 = 0;

const operate = (operator, num1, num2) => {
    switch(operator){
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*' || "x":
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        default:
            alert("Choose a valid operator !")
            break;
    }
}

//populate the display with the buttons

const display = document.querySelector('.display')

let displayText = document.querySelector('.display h1');
let displayValue = 0;

displayText.textContent = displayValue;

const appendNumber = (number) => {
    if(displayValue == '0'){
        displayValue = number;
    } else {
        displayValue += number;
    }
    displayText.textContent = displayValue;
}

const numberButtons = document.querySelectorAll('.numbers .buttons');
const operatorButtons = document.querySelectorAll('.operators .buttons')

//negative numbers use case
//make the text start from the right and get pushed left as it's added

numberButtons.forEach( btn => btn.addEventListener('click', () => {
    appendNumber(btn.textContent);
}))

operatorButtons.forEach( btn => btn.addEventListener('click', () => {
    if(btn.textContent != '='){
        //prob error
        if(Number.isInteger(displayValue)){
            number1 = Number.parseInt(displayValue);
        }
        else{
            number1 = Number.parseFloat(displayValue);
        }
        displayText.textContent = `${displayValue} ${btn.textContent}`
        displayValue = 0;
    }
    else{
        alert("Select a valid operator !")
    }
} ))