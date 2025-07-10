const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

// Add todo
app.post("/todo", (req, res) => {

})

// View all todos
app.get("/todos", (req, res) => {

})


//Mark as done
app.put("/completed", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`This app is listenig on port ${port}`)
})