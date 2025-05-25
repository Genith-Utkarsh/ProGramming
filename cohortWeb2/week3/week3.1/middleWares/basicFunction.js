const express = require("express")
const app = express()
const port = 3000

function userMiddleware(req, res, next)               // Prechecks for user Infomation
{
    if(username != "utkarsh" || password != "pass"){
        res.status(403).json({
            msg : "Wrong inputs"
        })
    }
    else {
        next()
    }
}

function kidneyMiddleware(req, res, next)             // Prechecks for kidney informations
{
    if(kidneyId != 1 && kidneyId != 2 )
    {
        res.status(403).json({
            msg : "Wrong inputs"
        })
    }
    else {
        next()
    }
}




app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("Your health is fine ..!")
} )

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("Your kidney is fine")
})

app.get("/heart-check", userMiddleware, function(req, res){
    res.send("You heart is fine")
    
})

app.listen(port, function(){
    console.log(`This app is listening on port ${port}`)
})