const fs = require("fs");

function myAsync(cbFn)
{
    fs.readFile("a.txt", "utf-8", function(err, data)
    {
        cbFn(data)
    })
}

function onDone(data)
{
    console.log(data)
}

myAsync(onDone)