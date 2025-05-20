const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const port = 3000

app.use(bodyParser.json())


app.post('/conversations', function(req, res){
    const message = req.body.message
    console.log(message)

    // do some machine learning here

    res.json({
        outPut : "2 + 2 = 4"
    })
})


app.listen(port, function(){
    console.log(`This app is running on port ${port}`)
})