
function calculate() {
    // Get the input values
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var operator = document.getElementById('operator').value;
    var result;

    // Perform calculation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Division by zero error!';
            }
            break;
        case '%':
            if (num2 !== 0) {
                result = num1 % num2;
            } else {
                result = 'Division by zero error!';
            }
            break;
        default:
            result = 'Invalid operation';
    }

    // Display the result
    document.getElementById('result').innerHTML = 'Result: ' + result;
}

