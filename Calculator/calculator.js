function mathematicalOperation (number1, symbol, number2) {
    if (symbol === "+") {
        return number1 + number2;
    } else if(symbol === "-"){
        return number1 - number2;
    } else if (symbol === "/") {
        return number1 / number2;
    } else if(symbol == "x") {
        return number1 * number2;
    }
}

console.log(mathematicalOperation(3, "x", 3));

const numberButtons = document.querySelectorAll('[data-button-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const dotButton = document.querySelectorAll('[data-dot]');
const equalsButton = document.querySelectorAll('[data-equals]');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}

