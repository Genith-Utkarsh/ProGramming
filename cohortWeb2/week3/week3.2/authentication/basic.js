const express = require("express")      // importing libraries
const app = express()
const jwt = require("jsonwebtoken")


const jwtPassword = 123123      // secret key
const port = 3000              // deifining port 

app.use(express.json())          // middleWare


// user data in sample db

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



// Function to check if user exist or not in sample database 
function checkUserExist(username, password){
    let flag = false
    for(let i = 0; i < ALL_USERS.length ; i++)
    {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            flag = true
        }

        return flag
    }
}



app.post("signin", function(req, res){                    // Taking input from user
    const username = req.headers.username
    const password = req.headers.password
})





app.listen(port, () => {
    console.log(`This app is listening on poer ${port}`)
})