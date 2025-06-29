const express = require("express")
const app = express()
const port = 3000

app.use(express.json()) // Middleware to parse JSON bodies


app.get("/", (req, res) => {

    res.send("Welcome to the HTTP Server!")

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})