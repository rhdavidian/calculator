
const display = document.querySelector('input');
let equation = document.getElementById('equation');
equation.textContent = '';
let frstNumber = null;
let operator = null;
let secNumber = null;

const clear = document.querySelector('#clear')
    clear.addEventListener('click', () => {
        display.value = '';
        equation.textContent = '';
        frstNumber = null;
        secNumber = null;
        operator = null;
    });

const btn = document.querySelectorAll('.number');
    btn.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
        });
    });

const btnSign = document.querySelectorAll('.signs');
    btnSign.forEach(button => {
        button.addEventListener('click', () => {
              //Dealing with operating on an existing answer

            if (display.value == ''){
                frstNumber = +equation.textContent;
                operator = button.textContent;
                equation.textContent += ' ' + operator;
            } else if (frstNumber == null) {
                frstNumber = display.value;
                operator = button.textContent;
                equation.textContent += display.value + ' ' + operator + ' ';
                display.value = '';

            } else if (secNumber == null) {
                secNumber = display.value;
                frstNumber = operate(frstNumber, operator, secNumber);
                operator = button.textContent;
                equation.textContent += display.value + ' ' + operator + ' ';
                display.value = '';
           
            } else if (operator != null && frstNumber != null) {
                secNumber = display.value;
                frstNumber = operate(frstNumber, operator, secNumber);
                operator = button.textContent;
                equation.textContent += secNumber + ' ' + operator + ' ';
                display.value = '';
            }
        });
    });

    const equals = document.getElementById('equals');
        equals.addEventListener('click', () => {
            if (secNumber == null) {
                secNumber = display.value;
                equation.textContent += display.value + '=';
                display.value = '';
            } else {
                secNumber = display.value;
                equation.textContent += display.value + '=';
                display.value = '';
            }
            equation.textContent = operate(frstNumber, operator, secNumber);
        });

function add(a, b) {
    return +a + +b;
};
function subtract(a, b){
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};

function operate(num1, oper, num2) {
    if (oper == '+') {return add(num1, num2)};
    if (oper == '-') {return subtract(num1, num2)};
    if (oper == 'x') {return multiply(num1, num2)};
    if (oper == '÷') {return divide(num1, num2)};
};

