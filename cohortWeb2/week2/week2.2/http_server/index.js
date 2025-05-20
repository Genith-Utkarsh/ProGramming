const express = require("express")     // Importing Express library
const bodyParser = require("body-parser")   // Importing body-parser library
const app = express()
const port = 3000               // listening on port 3000

app.use(bodyParser.json())   // Middlewares

// app.get('/', function(req, res){
//     res.send("Hello World !")
// })

app.post('/', function(req, res){
    console.log(req.body)
})


// app.post('/conversations', function(req, res){
//     console.log(req.headers["authorization"])
//     res.send({
//         msg : "2 + 2 = 4"
//     })
// })

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

