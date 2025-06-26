function sum(num1, num2,fnToCall) {
    let result = num1 + num2;
    fnToCall(result)
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

let ans = sum(1, 2 , displayResult)
// You are only allowed to call one function after this
// How will you displayResult of a sum






function calculateArithematic(a, b, operaton){
    const result = operation(a, b)
    return result
}

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}


function multiply(a, b){
    return a * b
}


function divide(a, b){
    return a / b
}       


let finalResult = calculateArithematic(10, 20, multiply)

console.log("Final result is : " + finalResult);
