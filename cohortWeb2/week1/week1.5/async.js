


console.log("Step 1 Before async functon")          // 1
const displayHello = () => {
    console.log("Hello")
}

setTimeout(displayHello, 2000)  // 2 milisecond              // 3

console.log("Step last After async function")           // 2




/// setTimeout => we need pass a function and time in milliseconds as parameters