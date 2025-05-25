const express = require("express")
const app = express()
const port = 3000


// if middleware ko har route me cal krna hai to use app.use



let numberOfReq = 0

function calculateReq(req, res, next){
    numberOfReq++
    console.log(numberOfReq)
    next()
}

app.use(calculateReq)

// app.get("/", calculateReq, function(req, res){
//     res.send("Done", numberOfReq)
// })

app.get("/health-check", function(req, res){
    res.send("Done")
})

app.get("/health-check2", function(req, res){
    res.send("Done2")
})

app.listen(port, () =>{
    console.log(`This app is running on port ${port}`)
})