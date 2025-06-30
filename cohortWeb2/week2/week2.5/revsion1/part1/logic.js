const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

const square = (n) => {
    return n * n;
}


app.get("/", (req, res) => {
    const number = parseFloat(req.query.number)
    if (isNaN(number)) {
        return res.status(400).json({ error: "Invalid number" })
    }
    const result = square(number)

    res.json({
        "result" : `square of ${number} is ${result}`
    })


})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})