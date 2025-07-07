const express = require("express")
const app = express()

const port = 3000

//1. middleware
app.use(express.json())




//port
app.listen(port, function() {
    console.log(`This app is running on port ${port}`)
})