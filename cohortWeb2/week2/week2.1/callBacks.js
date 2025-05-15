function square(n)
{
    return n * n
} 

function cube(n)
{
    return n * n * n 
}

function sumOfSomething(a, b, fnToCall)
{
    let value1 = fnToCall(a)
    let value2 = fnToCall(b)
    return value1 + value2
}

let result = sumOfSomething(2, 3, square)
console.log(result);
