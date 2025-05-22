const express = require(express)
const fs = require("fs")
const app = express()

const port = 3000

app.get('/files/:fileName', function(req, res){          // :fileName means anything types after / will also get control will reach here
    const name = req.params.fileName
    console.log(name)

    fs.readFile(name,"utf-8", function(err, data){
        res.json({
            data
        })
    })
})


app.listen(port, function(){
    console.log(`This app is listening on port ${port}`)
})