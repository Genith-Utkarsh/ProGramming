const mongoose = require("mongoose")


// 1) Connect to MongoDB
mongoose.connect("mongodb+srv://buvautkarsh849:uX4uz86UqjbWECW4@cluster0.g427upx.mongodb.net/course_selling_app")


//2)Defing the admin and user schema
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
})

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
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
