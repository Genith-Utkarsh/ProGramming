const express =  require("express")
const { User, Course } = require("../db/db")
const { userAuthMiddleWare } = require("../middleware/user")
const router = express.Router()

// Open 
router.post("/signup", async(req, res) => {
    const username  = req.headers.username
    const password = req.headers.password

    try {
        await User.create({
            username,
            password
        })

        res.status(200).send("User created successfully ..")

    } catch(err){
        console.log(err)
        res.status(501).send("Error creating User")
    }
})

router.get("/courses", async(req, res) => {
    try {
        const allCourses = await Course.find({})
        res.send(allCourses)

    } catch(err) {
        console.log(err)
        res.status(501).send("Error finding courses")
    }
})

router.post("/courses/:courseId", userAuthMiddleWare ,async(req, res) => {
        const courseId = req.params.courseId
        const username =  req.headers.username

        // chcecking if it is valid course Id or not 

        try {
            await User.findOneAndUpdate({username}, {
                $push : {
                    purchasedCourses : courseId
                }
            })

            res.status(200).json({
                msg : "Succesfully purchases course",
            })


        } catch(err){
            console.log(err)
            res.status(501).send("Error purchasing courses..")
        }
})

router.get("/purchasedCourses", async(req, res) => {

})