const express = require("express")
const {User, Course} = require("../db/")
const router = express.Router()
const userMiddleware = require("../middleware/user")

router.post("/signup", async (req, res) => {
    const {username, password}  = req.headers

    await User.create({
        username,
        password
    })

    res.json({
        msg : "User created succesfully"
    })
})


router.get("/courses", async (req, res) => {
    const responce = await Course.find({})

    res.json({
        courses : responce
    })
})



router.post("/courses/:courseId", userMiddleware ,async(req, res) => {
    const courseId = req.params.courseId
    const username = req.headers.username

    await User.updateOne({
        username : username
    }, {
         "$push" : {
            purchasedCourses : courseId
         }
    })

    res.json({
        msg : "Purchase complete .."
    })
})


router.get("/purchasedCourses",userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username : req.headers.username
    })

    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })

    res.json({
        msg : courses
    })
})

module.exports = router