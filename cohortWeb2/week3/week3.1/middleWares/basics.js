const express = require("Express")
const app = express()
const port = 300

// passing many cb function in app.get
// using 'next' as argument to pass control over next function by calling next()


app.get("/health-checkup", function(req, res, next){
    console.log("Hii from req 1 ")
    next()    // calling next to pass over next function

    
}, function(req, res){
    console.log("Hi from req 2 ")
    res.send("Reached to final function")
})


app.listen(port, function(){
    console.log(`This app is listening on port ${port}`)
})