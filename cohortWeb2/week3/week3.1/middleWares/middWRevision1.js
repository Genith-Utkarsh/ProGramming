const express = require("express")
const app = express()
const port = 3000


function isOldEnoughMiddleware(req, res, next){
    const age = req.body.age 

    if(age >= 14){
        next()
    }
    else {
        res.json({
            msg : "You age doesnt meet the crietria"
        })
    }
}

app.get("/ride", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg : "You can successfully qualified for ride "
    })
})

app.listen(port, function(){
    console.log(`This app is listening on port ${port}`);
    
})