const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data)
{
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
        data = data + "The file is changed somewhat"
        fs.writeFile("a.txt")
    }
})