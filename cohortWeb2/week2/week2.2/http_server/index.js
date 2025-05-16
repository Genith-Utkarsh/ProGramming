const express = require("express")     // Importing Express library
const app = express()
const port = 3000               // listening on port 3000

app.get('/', function(req, res){
    res.send("Hello world")
})

app.listen(port)
