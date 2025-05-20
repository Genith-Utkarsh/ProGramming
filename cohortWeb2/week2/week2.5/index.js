const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

// defining route

// writing some logiic here : sum till n

function sum(n){
    let sum = 0
    for(let i = 0; i <= n; i++)
    {
        sum += i
        return sum
    }
}


app.get('/', function(req, res){
    let n = req.query.n
    let result = sum(n)

    res.send(`The final output is ${result}`)
})


app.listen(port, function(){
    console.log(`This app is listening on port ${port}`)
})