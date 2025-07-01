const express = require("express")
const app = express()
const port = 3000


app.use(express.json())

app.get("/", (req, res) => {
    const kidneyId = req.query.n
    const username = req.headers.username
    const password = req.headers.password

    // checking if pass username and password is correct or not
    // first check

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg : "something up with kideny id please check again"
        })
        return ;
    }

    // second check

    if(username !== "admin" || password !== "admin123"){
        res.status(401).json({
            msg : "Invalid username or password"
        })
        return ;
    }

    res.json({
        message : "Your kidney is fine..."
    })

})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})