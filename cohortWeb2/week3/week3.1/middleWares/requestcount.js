const express = require("express")
const app = express()

const port = 3000

let requestCount = 0


// creating a global middleware
app.use(function(req,res, next){
    requestCount += 1
    next()
})


app.get("/home", function(req, res){
    res.json({
        msg : "This is home page"
    })
})

app.get("/viewreqs", function(req, res){
    res.json({
        requestCount
    })
})

app.listen(port)