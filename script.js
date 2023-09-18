/* Addition */
function add(a, b) {
    return a + b;
}

/* Subtraction */
function sub(a, b) {
    return a - b;
}

/* Multiplication */
function mul(a, b) {
    return a * b;
}

/* Division */
function div(a, b) {
    if(b === 0) {
        return 'ZeroDivisionError'
    }
    return a / b;
}

/* Modulo */
function mod(a, b) {
    return a % b;
}

let val1 = 0;
let val2 = '';
let operator = '';
let result = 0;

/* Function to calculate */
function operate(num1, opera, num2) {
    switch (opera) {
        case '+':
            return add(num1, num2);

        case '-':
            return sub(num1, num2);

        case '*':
            return mul(num1, num2);

        case '/':
            return div(num1, num2);

        case '%':
            return mod(num1, num2);

        default:
            return 'ERROR!';

    }
}

/* Variables declaration */
const btn = document.querySelectorAll('.btn');
const display = document.getElementById('display')
let clearScreen = false;

/* Adding button functionality */
btn.forEach(button => {
    const btnValue = button.textContent;
    button.addEventListener('click', () => {
        if (btnValue === '=') {
            if (val1 !== '' && val2 !== '') {
                result = operate(+val1, operator, +val2);
                display.value = result;
                console.log(val1);
                console.log(result);
                val1 = result;
                val2 = ''
            } try {
                if (!Number.isInteger(result)) {
                display.value = result.toFixed(11)
            }
            } catch (error) {
                console.log('Out put not a number');
            }
            
        } else if ('+-*/%'.includes(btnValue)) {
            display.value = val1;
            clearScreen = true;
            if (val1 !== '' && val2 !== '') {
                result = operate(+val1, operator, +val2);
                console.log(result);
                val1 = result; 
                display.value = val1;           
            }
            operator = btnValue
            // val1 = result
        } else if(btnValue === 'AC') {
            display.value = '0'
            val1 = 0
            val2 = ''
            operator = ''
        } else if(btnValue === 'C') {
            display.value = display.value.slice(0, -1)
            val1 = display.value
        } else {
            if (display.value === '0') {
                display.value = ''
            }
            if(clearScreen) {
                display.value = ''
                clearScreen = false
            }
            display.value += btnValue;

            if (operator === '') {
                // If no operator is selected, update val1
                val1 = display.value;
            } else {
                // If an operator is selected, update val2
                val2 = display.value;
            }
        }

    });
});