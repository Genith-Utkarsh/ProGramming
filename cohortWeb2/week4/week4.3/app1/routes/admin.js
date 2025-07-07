const express = require("express")
const adminMiddleware = require("../middleware/admin")
const { Admin,  Course} = require("../db/index.js")
const router = express.Router()

router.post("/signup",  async (req, res) => {
    const username = req.headers.username
    const password = req.headers.password

    // check if username is already taken or not 
    await Admin.create({
        username : username,
        password : password
    })

    res.status(201).json({
        msg : "Admin created successfully.."
    })
})



router.post("/courses", adminMiddleware, async (req, res) => {
    const {title, description, imageLink, price} = req.body
    const new_course = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.status(201).json({
        msg : "Course created successfully",
        courseId : new_course._id
    })
})

router.get("/courses", adminMiddleware, async (req, res) => {
    const responce = await Course.find({})

    res.json({
        Courses : responce
    })
})

module.exports = router