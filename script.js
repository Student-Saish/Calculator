let display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;  //appends the number in string format
}

function appendOperator(operator) {
    display.value += operator; //appends the operator
}

function clearDisplay() {
    display.value = ''; // clears the screen for new calculation
}

function calculate() {
    try {
        display.value = eval(display.value); // evaluates the given string and displays the results
    } catch (error) {
        display.value = 'Error'; // diplays the errro has occured.
    }
}
