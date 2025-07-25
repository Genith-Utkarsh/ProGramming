const { User } = require("../db/db")

const userAuthMiddleWare = (req, res, next) => {
    const username = req.headers.username
    const password = req.headers.password

    User.findOne({username}).then((user) => {
        if(username !== user.admin){
            return res.send("User not found in our database")
        }
        if(password != user.password){
            return res.send("Incorrect password")
        }
        next()
    }).catch((err) => {
        console.log(err)
        res.status(500).send("Internal server error")
    })

}

module.exports = {userAuthMiddleWare}