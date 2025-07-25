const mongoose = require("mongoose")
const { minLength, maxLength, trim } = require("zod")


mongoose.connect()

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        minLength : 3,
        maxLength : 30,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        require : true,
        minLength : 3,
        maxLength : 30,
        select : false,
        trim : true
    },

    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Courses'
    }]
})

const adminShema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        minLength : 3,
        maxLength : 14,
        trim : true,
        unique : true
    }, 
    password : {
        type : String,
        require : true,
        minLength : 3 ,
        maxLength : 14,
        select : false,
        trim : true
    }
})

const courseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number
})

const User = mongoose.model("User", userSchema)
const Admin = mongoose.model("Admin", adminShema)
const Course = mongoose.model("Course", courseSchema)


module.exports = {
    User,
    Admin,
    Course
}