const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys
    const kidneyLength = kidneys.length           // This will throw if kidneys is undefined
    res.send(`You have ${kidneyLength} kidenys`)
})


// error handling   (GLOBAL CATCHES)

// Whenever a route or middleware throws an error (or next(err) is called),
//  Express will skip normal middlewares and jump directly to error-handling middleware like this one.


app.use(function(err, req, res, next){
    // res.json({
    //     msg : "something is up with your server"
    // })

    res.status(500).send("An internal server error occured")
})


app.listen(port, () =>{
    console.log("This app is listening on port", port)
})