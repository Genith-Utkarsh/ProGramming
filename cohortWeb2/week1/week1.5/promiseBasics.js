const  fs = require("fs")

function narutoReadFile()
{
    return new Promise(function(resolve)
{
    fs.readFile("a.txt", "utf-8", function(err, data)
    {   
        resolve(data)
    })
})
}

function onDone(data)
{
    console.log(data)
}

narutoReadFile.then(onDone)