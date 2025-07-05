const mongoose = require("mongoose")
const { title } = require("process")
const { moveMessagePortToContext } = require("worker_threads")

// 1) Connect to MongoDB
mongoose.connect("")


//2)Defing the admin and user schema
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
})

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.types.ObjectId,
        ref : "---"
    }]
})


const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageLink : String,
    price : Number
})


const Admin = mongoose.model("Admin", AdminSchema)
const User = mongoose.model("User", UserSchema)
const Course = mongoose.model("Course", CourseSchema)

module.exports = {
    Admin,
    User,
    Course
}
