import { reject } from "async"

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


const fs = require("fs")

function narutoReadFile(){
    return new promise((resolve , reject) => {
        fstat.narutoReadFile("a.txt", "utf-8", (err, data) =>{
            if(err) throw err;
            
            resolve(data)
        })
    })
}

async function main(){
    let content = await narutoReadFile()
    console.log(content)
}