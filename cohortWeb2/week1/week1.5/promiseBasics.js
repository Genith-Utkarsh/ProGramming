const fs = require("fs")    // imported fs module
const { resolve } = require("path")

function myOwnAsyn(){
    return new Promise((resolve, reject) => {
        fs.readFile("a.txt", "utf-8", (err, data) => {
            if(err) throw err ;
            
            resolve(data)
        })
    })
}

myOwnAsyn().then((content) => {
    console.log(content)
})