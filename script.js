document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === '=') {
                try {
                    const result = eval(expression);
                    display.value = result;
                    expression = result.toString();
                } catch (error) {
                    display.value = 'Error';
                    expression = '';
                }
            } else if (value === 'C') {
                display.value = '';
                expression = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                const lastChar = expression[expression.length - 1];

                // Check if expression is not empty and last character is not an operator
                if (expression !== '' && !['+', '-', '*', '/'].includes(lastChar)) {
                    expression += value;
                    display.value = expression;
                }
            } else {
                // Check if expression is not empty or doesn't start with an operator
                if (expression !== '' || !['+', '-', '*', '/'].includes(value)) {
                    if (expression.includes('=') || expression.includes('Error')) {
                        expression = value;
                    } else {
                        expression += value;
                    }
                    display.value = expression;
                }
            }
        });
    });
});
