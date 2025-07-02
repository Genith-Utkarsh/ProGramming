const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
require('dotenv').config();


const port = 3000;
const key = process.env.JWT_SECRET

app.use(express.json());

// sample database

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh"
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh"
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari"
  }
]



app.post("/signin", (req, res) => {
    const { username , password} = req.body
    // checking if user exist or not
    const user = ALL_USERS.find(user => user.username === username && user.password === password);

    if(!user) {
        return res.status(403).json({
            msg: "User doesn't exist in our database"
        });
    }

    // if user exist then we will generate token
    const payload = {username : username}
    const token =jwt.sign(payload, key)
    return res.status(200).json({
        msg: "User exist",
        token: token
    })
})


app.get("/users", (req, res) => {
    const authorization = req.headers.authorization
    if(!authorization) {
        return res.status(401).json({
            msg: "Authorization header is missing"
        });
    }

    try {
        const decoded = jwt.verify(authorization, key)
        // if token is valid then we will return the user data

        const user = ALL_USERS.find( function(user){
           return  user.username == decoded.username
        })

        return res.status(200).json({
            msg: "User data",
            user: user.username
        });
    }
    catch (error) {
        return res.status(401).json({
            msg : "Invalid token"
        })
    }


})




app.listen(port, () => {    
    console.log(`Server is running on http://localhost:${port}`);
} )