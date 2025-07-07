const {User} = require("../db/index.js");


function userMiddleware(req, res, next){
    const {username, password} = req.headers
    User.findOne({
        username : username,
        password : password
    })
    .then(function(value) {
        if(value) {
            next()
        } else {
            res.status(401).json({
                message : "User doesn't exist in our database."
            })
        }
    })
}


module.exports = userMiddleware