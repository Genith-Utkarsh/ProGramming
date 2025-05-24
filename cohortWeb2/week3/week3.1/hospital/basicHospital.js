const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.get("/health-checkup", (req, res) => {
    // HEALTH CHECKS   
    const kidneyId = req.query.kidneyId
    const username = req.headers.username
    const password = req.headers.password


    if(username != "utkarsh" || password != "pass")
    {
        res.status(403).json({
            msg  : "User does not exist"
        })
        return
    }

    if(kidneyId != 2 ){
        res.status(411).json({
            msg : "wrong inputs"
        })  
        return 
      }

    res.json({
        msg : "Your kidney is fine"
    })
})

app.listen(port, function(){
    console.log(`This app is listening  on port ${port}`)
})