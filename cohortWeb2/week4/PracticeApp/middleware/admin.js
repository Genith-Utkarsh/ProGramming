const { Admin } = require("../db/db")

const adminAuthMiddlewrae = (req, res, next) => {
    const username = req.headers.username
    const password = req.headers.password

    // first we have if the admin is exist in db or not 
    Admin.findOne({username}).then((admin) => {
        if(!admin) {
            return res.send("Admin not found in our database")
        }
        if(password !==  admin.password){
            return res.send("Incorrect password")
        }
        next()
    }).catch((err) => {
        console.error("Error during admin authentication:", err)
        res.status(500).send("Internal server error during authentication")
    })          
}

module.exports = {adminAuthMiddlewrae}
