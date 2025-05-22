const express = require("express")
const app = express()
const port = 3000

app.use(express.json())


// user info
let users = [{
    name : "Jhon",
    kidneys : [{
        healthy : false
    }]
}]



app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys    // array of Kidneys
    const numberOfKidneys = johnKidneys.length      // number of kidneys 

    // counting number of healthy kidneys availble
    let numberOfHealthyKidneys = 0
    for(let i = 0 ; i < numberOfKidneys; i++)
    {
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys += 1
        }
    }
    const numberOfUnealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnealthyKidneys
    })
})

app.post("/", function(req, res){
    // user will post some info

    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Done"
    })
})

app.put("/", function(req, res){
    // making all kidneys healthy
    for(let i = 0; i < users[0].kidneys.length; i++)
    {
        users[0].kidneys[i].healthy = true
    }

    res.json({
        msg : "Kidneys Updated Successfully.."
    })
})

app.delete("/", function(req, res){
    if(isThereatleastOneUnhealthyKidney())
    {
        const newKidneys = []
        for(let i = 0; i < users[0].kidneys.length; i++)
        {
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                healthy : true
            })
            }
            
        }

        users[0].kidneys = newKidneys
        res.json({
            msg : "Removed kidneys that were unhealthy"
        })
    }
    else {
        res.status(411).json({
            msg : "You have no bad kidneys"
        })
    }
})

function isThereatleastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false 
    for(let i = 0; i < users[0].kidneys.length ; i++)
    {
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true
        }
    }

    return atLeastOneUnhealthyKidney
}


app.listen(port, function(){
    console.log(`This app is listening on port ${port}`)
})