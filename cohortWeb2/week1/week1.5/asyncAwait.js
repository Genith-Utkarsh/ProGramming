function kiratAsyncFunction()
{
    return new Promise(function(resolve)
{
    setTimeout(function(){
        resolve("Hi There !")
    }, 3000)
})
}

async function main() {
    console.log("Before await")
    let value = await kiratAsyncFunction()
    console.log("After await")
    console.log(value)
}
main()
console.log("Before main")