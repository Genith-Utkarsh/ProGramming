const express = require("express")
const { adminAuthMiddlewrae } = require("../middleware/admin")
const { Admin, Course } = require("../db/db")
const router = express.Router()

router.get("/signup", async (req, res) => {
    const username = req.headers.username
    const password = req.headers.password

    try {
        await Admin.create({
            username : username,
            password : password
        })

        res.status(200).send("Admin created successfully")
    
    } catch(err) {
        console.log(err)
        res.status(501).send("Error creating admin")
    }

})

router.post("/courses", adminAuthMiddlewrae, async (req, res) => {
    // craete new course
    const {title, description, price} = req.body

    try {
         const newCourse =   await Course.create({
            title,
            description,
            price
         })

         res.status(201).send({
            msg : "Course crated succesfully",
            courseId : newCourse._id
         })
    } catch(err) {
        console.log(err)
        res.status(501).send("Error creating course")
    }
   
})


router.get("/courses", adminAuthMiddlewrae, async  (req, res) => {
    try {
        const responce = await Course.find({})
        res.status(200).send(responce)
    } catch(err){
        console.log(err)
        res.status(501).send("Error finding courses")
    }
})

module.exports = router