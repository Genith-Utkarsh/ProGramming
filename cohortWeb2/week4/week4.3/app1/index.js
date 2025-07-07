const express = require("express")
const app = express()
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

const port = 3000

//1. middleware
app.use(express.json())

app.use("/admin", adminRouter)
app.use("/user", userRouter)






//port
app.listen(port, function() {
    console.log(`This app is running on port ${port}`)
})