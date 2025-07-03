const express = require('express');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
require("dotenv").config()
app.use(express.json())

const key = process.env.JWT_SECRET; // JWT secret key for security

mongoose.connect(process.env.MONGO_URI)





const userSchema = new mongoose.Schema({
    email : String,
    username : String,
    password : String
})


const User = mongoose.model("User", userSchema)    




app.post("/signup", async (req, res) => {
    const {email, username, password} = req.body; // Destructuring to get inputs
    // Check if user already exists
    const userExist = await User.findOne({username: username})
    if (userExist) {
        return res.status(409).json({
            msg: "Username already exists, please choose another."
        });
    }
    // Create a new user

    const newUser = new User({
        email : email,
        username : username,
        password : password
    })

    await newUser.save() // Save the new user to the database

    const payload = {
        email : email,
        username : username
    }

    const token = jwt.sign(payload , key)

    res.status(200).json({
        msg : "User created successfully",
        token : token
    })

})


app.get("/info", async (req, res) => {
    const auth = req.headers.auth

    try {
        const decoded = jwt.verify(auth, key)
        const username  = decoded.username 

        const userInfo = await User.findOne({username : username})

        // if (!userInfo) {
        //     return res.status(404).json({
        //         msg: "User not found"
        //     });
        // }
        res.status(200).json({
            msg: "User information retrieved successfully",
            info : {
                email : userInfo.email,
                username : userInfo.username
            }
        })
        
    } catch(err) {
        return res.status(411).json({
            msg : "auth isnt present in headers"
        })
    }
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});