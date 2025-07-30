const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_URI)

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    firstName : String,
    lastName  : String
})

const User = mongoose.model("User", userSchema)

module.exports  = {
    User
}