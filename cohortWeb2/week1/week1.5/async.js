
console.log("Before async function")
function displayHello()
{
    console.log("Hello")
}

setTimeout(displayHello, 3000)   // when the thread become idle the it will be called 

console.log("After async function");


