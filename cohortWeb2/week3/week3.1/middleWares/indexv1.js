const express = require("express")
const app = express()
const port  = 3000

// Middleware to handle authentication and kidney ID validation
app.use(express.json())

function authMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password

    if(username !== "admin" || password !== "admin123") {
        return res.status(401).json({
            msg: "Invalid username or password"
        })
    } 
    next()
}

function kidneyIdMiddleware(req, res, next){
    const kidneyId = req.query.n

    if(kidneyId != 1 && kidneyId != 2) {
        return res.status(411).json({
            msg: "Something is wrong with kidney ID, please check again"
        })
    }
    next()
}

app.use(authMiddleware)


// ===========================================================

// Mini Database 

const usersData = {
    1: { id: 1, name: "John Doe", age: 30 },
    2: { id: 2, name: "Jane Smith", age: 25 }
}


const userKidney = {
    kidney1 : "Fine no improvement",
    kidney2 : "Fine no improvement"
}
// ============================================================


app.get("/users", (req, res) => {
    res.json(usersData)
})


app.get("/kidney", kidneyIdMiddleware, (req, res) => {
    res.json(userKidney)
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
}  )