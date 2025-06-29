const express = require("express")
const app = express()
const port = 3000

app.use(express.json()) // Middleware to parse JSON bodies


app.get("/", (req, res) => {

    // res.send("Welcome to the HTTP Server!")
    res.json({
        "message" : "Great you have successfully completed the lvl"
    })

})


app.post("/solve", (req, res) => {
    const question = req.body.question
    console.log("Received question:", question)
    // Here you can add logic to process the question
    res.json({
        "message": "Question received successfully",
        "question": question
    })

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})