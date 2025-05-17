const express = require("express")     // Importing Express library
const app = express()
const port = 3000               // listening on port 3000

app.get('/', function(req, res){
    res.send("Hello world")
})

app.get('/another', function(req, res){
    res.json({
        userName : "Alan Walker", 
        age : 20,
        nickName : "Dj Walk"
    })
})

app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})
