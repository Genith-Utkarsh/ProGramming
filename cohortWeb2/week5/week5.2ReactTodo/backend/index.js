const express = require("express")
import { createTodo, updateTodo } from "./types"
import { Todo } from "./db"
const app = express()
const PORT = 3000

app.use(express.json())

// Add todo
app.post("/todo", async function (req, res) {
    const userObj = req.body
    const responce = createTodo.safeParse(userObj)

    if(!responce.success){
        return res.status(411).json({
            msg : "Invalid inputs"
        })
    } 
    // else save it in db
    const newTodo = await  Todo.create({
        title : userObj.title,
        description : userObj.description,
        completed : false
    })

    res.status(201).json({
        msg : 'todo created',
        id : newTodo._id
    })
})

// View all todos
app.get("/todos", async function(req, res){
    const allTodos = await Todo.find({})

    res.status(200).json({
        allTodos
    })
})


//Mark as done
app.put("/update", async function(req, res){
    const editedPayload = req.body
    const responce = updateTodo.safeParse(editedPayload)

    if(!responce.success){
        return res.status(411).json({
            msg : "invalid inputs.."
        })
    }

    await Todo.update({
        _id : req.body.id
    }, {
        completed : true
    })

    res.json({
        msg : "Done mark as completed"
    })

})

app.listen(PORT, () => {
    console.log(`This app is listenig on port ${port}`)
})