const fs = require("fs")

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



function narutoReadFile(){
    return new Promise((resolve , reject) => {
        fs.readFile("a.txt", "utf-8", (err, data) =>{
            if(err)  throw err;
            else {
                resolve(data)
            }
            
        })
    })
}

async function mainSecond(){
    let content = await narutoReadFile()
    console.log(content)
}
mainSecond()

