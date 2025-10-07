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

console.log(divide(0,0));