const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post("/conversations", function(req, res){
    const message = req.query.message
    console.log(message)

    // do some machine learning thing here

    res.json({
        output : console.log(`You enetered ${message}`)
    })
})


app.listen(port, function(){
    console.log(`This app is listening on port ${port}`)
})
