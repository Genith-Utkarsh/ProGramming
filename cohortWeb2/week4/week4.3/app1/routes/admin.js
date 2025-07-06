const express = require("express")
const adminMiddleware = require("../middleware/admin")
const { Admin } = require("../db/index.js")
const router = express.Router()

router.post("/signup",  (req, res) => {
    const username = req.headers.username
    const password = req.headers.password

    const adminExists = Admin.findOne({
        username : username
    }) .then(function(value) {
        if(value){
            res.status(401).json({
                msg : "User already exist please choose another username"
            })
        } else {
            res.status(200).json({
                msg : "Admin created succesfully"
            })
        }
        
    })
}) 

router.post("/courses", adminMiddleware, (req, res) => {

})

router.get("/courses", adminMiddleware, (req, res) => {

})

module.exports = router