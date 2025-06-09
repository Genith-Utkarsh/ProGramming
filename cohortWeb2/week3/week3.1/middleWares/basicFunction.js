const express = require('express')
const app = express()
const port = 3000

// Middleware to validate user credentials

function userInfoCheck(req, res, next){
    const username = req.headers.username
    const password = req.headers.password

    if(username != "admin" || pass != "pass"){
        res.status(400).json({
            msg : "Something is up with your inputs"
        })
    }
    else {
        next()
    }

}

// Validation of kidenyId
function userKidneyCheck(req, res, next){
    const kidenyId = req.query.kidenyId

    if(kidenyId != 1 && kidenyId != 2)
    {
        res.status(400).json(
            {
                msg : "Something is up with your inputs"
            }
        )
    }
    else {
        next()
    }
}


app.get("/health-checkup", userInfoCheck, userKidneyCheck, (req, res) =>{
    res.send("Your heart is fine..")
})

app.get("/kidney-check", userInfoCheck, userKidneyCheck, (req, res) =>{
    res.send("Your kidnet is fine")
})

app.get("/heart-check", userInfoCheck, (req, res) => {
    res.send("Your heart is fine..")
})

app.listen(port, () => {
    console.log("This app is listening on port :", port )
})