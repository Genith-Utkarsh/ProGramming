const mongoose = require("mongoose")

// 1) connecting to mongoose 
mongoose.connect("")


const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = {
    Todo
}