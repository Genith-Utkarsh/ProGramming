const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys
    const kidneyLength = kidneys.length;

    res.send("You have" + kidneyLength + "kidneys")
})

app.listen(port, function(){
    console.log(`This app is listenibg on port ${port}`)
})