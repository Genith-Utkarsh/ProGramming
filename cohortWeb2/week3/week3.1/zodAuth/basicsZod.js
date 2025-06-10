const express = require("express")
const app = express()
const zod = require("zod")      // importing the zod library
const port = 3000

const schema = zod.array(zod.number())             // base structure => array of numbers

app.use("express.json()")

app.post("/health", function(req, res){
    const kidenys = req.body.kidenys
    const result = schema.safeParse(kidenys)         // Return a Object => {(success : true, data : ".....")} if valid

    // if not valid => ({success : false , error : "............"})


    if(!result.success){
        res.status(411).json({
            msg : "Something is up with your inputs please check"
        })
    } else{
        res.send({
            result
        })
    }
    
})


app.listen(port, () => {
    console.log(`This app is listening on port ${port}`)
})










// note 
// 🔹 What is a schema in Zod?
// A schema in Zod is like a rulebook that tells you what kind of data is allowed.

// 🔸 Imagine this:
// You want to check if someone gave you correct information about a user:


// {
//   name: "Utkarsh",
//   age: 20
// }
// You can write a Zod schema to say:

// “I expect a name (as a string) and an age (as a number).”

// 🔹 How Zod does this:

// import { z } from "zod";

// const userSchema = z.object({
//   name: z.string(),
//   age: z.number()
// });
