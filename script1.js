                currentInput = '';
                display.value = previousInput;
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

function calculate(num1, num2, operator) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    switch (operator) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n2 !== 0 ? n1 / n2 : 'Error';
        default: return n2;
    }
}const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            if (currentInput && previousInput) {
                display.value = calculate(previousInput, currentInput, operator);
                previousInput = display.value;
                currentInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                if (previousInput) {
                    previousInput = calculate(previousInput, currentInput, operator);
                } else {
                    previousInput = currentInput;
                }
                operator = value;

