const {Admin} = require("../db/index.js")

function adminMiddleware(req , res, next ){
    const {username , password} = req.headers

    Admin.findOne({
        username : username ,
        password : password
    })
    .then(function(value){
        if(value){
            next()
        } else {
            res.status(401).json({
                msg : "Admin not found in our database ..."
            })
        }
    })
}

