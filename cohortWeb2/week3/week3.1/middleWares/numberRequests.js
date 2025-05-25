const express = require("express")
const app = express()
const port = 3000

let numberOfReq = 0

function calculateReq(req, res, next){
    numberOfReq++
    console.log(numberOfReq)
    next()
}

app.get("/", calculateReq, function(req, res){
    res.send("Done", numberOfReq)
})


app.listen(port, () =>{
    console.log(`This app is running on port ${port}`)
})