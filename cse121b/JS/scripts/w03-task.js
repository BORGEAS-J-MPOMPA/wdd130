/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    const sum = number1 + number2;
    return sum;
}
function addNumbers(add1, add2) {
   let addNumber1 = Number(document.querySelector('#add1').value);
   let addNumber2 = Number(document.querySelector('#add2').value);
   document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);



/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}
function subtractNumbers (subtract1, subtract2) {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers (factor1, factor2) {
        let multiplyNumber1 = Number(document.querySelector("#factor1").value);
        let multiplyNumber2 = Number(document.querySelector("#factor2").value);
        document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2 );
}
document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
     
        if (number2 ===0){
            return "Cannot divide by zero!"};
        
        return number1 / number2 ;
    }

    function divideNumbers(dividend, divisor) {
        dividend = Number(document.querySelector('#dividend').value);
        divisor= Number(document.querySelector('#divisor').value);
        document.querySelector("#quotient").value = divide(dividend, divisor);
    }
    document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.getElementById("year").textContent = currentYear;
document.getElementById("year").textContent = new Date().getFullYear();

// yearElement.innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter(
  (number) => number % 2 === 1
);
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(
  (number) => number % 2 === 0
);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce(
  (sum, number) => sum + number
);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(
  (number) => number * 2
);

/* Output Sum of Multiplied by 2 Array */
let multipliedBytwo = numbersArray.map((number) => number * 2);
document.getElementById("sumOfMultiplied").innerHTML = multipliedBytwo.reduce(
  (sum, number) => sum + number
);