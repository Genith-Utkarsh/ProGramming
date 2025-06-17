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



app.post("/signin", function(req, res){                    // Taking input from user
    const username = req.body.username
    const password = req.body.password



    // checking for if really exist or not if user doesnot exist we are throwing error and not proceeding further control over next (that why we are returning)

    if(!checkUserExist(username, password)){
        return res.status(403).json({
            msg : "User doesn't exist in our data base"
        })
    }


    // if user pass the checks like user exist in database then it will be rewarded as JWT pass where you can enjoy request (access) till jwt expiration 


    const token = jwt.sign({username : username}, jwtPassword)         // {username : "utkarsh"}  ==> payload      and for this data ir payload only the jwt token will be generated once decoded the this data will be shown up

    

    // rewarding jwt token to user
    return res.json({
        token
    })
})



// accessing the "/user"  route using token 
// 1) user will create Autharization in headers as key and paste it jwt token as key
// 2) Get Method
// 3) once the reuest fullfilled (token is right ) the user can access route


// jwt.verify(token, jwtPassword)
// ✔️ If the token is valid → it decodes the payload and gives you the original data (like username, id, role, etc.)

// ❌ If the token is invalid (expired, tampered, or wrong secret) → it throws an error


app.get("/users", function(req, res){
    const token = req.headers.authorization

    try {
        const decoded = jwt.verify(token, jwtPassword)   // gives back original data if token is valid else throws error
        const username = decoded.username


        // returning json of users except the original user

        res.json ({
            users : ALL_USERS.filter(function(user){
                if(user.username == username){
                    return false
                }
                else {
                    return true
                }
            })
        })


    }
    catch(err) {
        return res.status(403).json({
            msg : "Invalid token"
        })
    }
})





app.listen(port, () => {
    console.log(`This app is listening on port ${port}`)
})