const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const app = express()
const jwtPassword = process.env.JWT_SECRET
require("dotenv").config() // This loads variables from .env into process.env

const port = 3000

app.use(express.json())   // middlewares


// connecting mongoDb database url

mongoose.connect(process.env.MONGO_URI)        // used env for security


// Mongoose's schema modeling system, and it's a critical part of how you communicate with your MongoDB database in a structured way.


// Defining the schema or sturcture 

const userSchema = new mongoose.Schema({
    email : String,
    username : String,
    password : String
})


// creating a model 

const User = mongoose.model("User", userSchema)



app.post("/signup", async function(req, res){
    const email = req.body.email                      // taking inputs
    const username = req.body.username
    const password = req.body.password



    // checking if user already exists or not 

    const existingUser = await User.findOne({username})

    if(existingUser){
        return res.status(409).json({
            msg : "Username already exists use another..."
        })
    }


    const newUser = new User({
        email : email,
        username : username,
        password : password
    })

    newUser.save()

    return res.status(201).json({
        msg : "Signup successful! User added to the Shadow Army."
    })

})




// sign in ==========================================

// 1) function to check if the user already exist in db


app.post("/signin", async function(req, res){
    const username = req.body.username
    const password =req.body.password


    // 1) checking if user exist in db or not 

    const user = User.findOne({username})

    if(!user){
        return res.status(401).json({
            msg : "user not found database please sign up first"
        })
    }

    // comparing the password 

    if(user.password != password){
        return res.status(403).json({
            msg : "Invalid password"
        })
    }


    // succesfull login

    return res.status(200).json({
        msg: "successfully login"
    })
})












app.listen(port, function(){
    console.log(`This app is listening on port ${port}`)
})