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
})

app.post("/", function(req, res){

})

app.put("/", function(req, res){

})

app.delete("/", function(req, res){

})


app.listen(port, function(){
    console.log(`This app is listening on port ${port}`)
})