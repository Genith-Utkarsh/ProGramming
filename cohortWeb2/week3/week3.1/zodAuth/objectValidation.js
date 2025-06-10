const zod = require("zod")

// function to validate the object

function validateObject(obj){
    
    // structure with data validation

    const schema = zod.object({
        email : zod.string().email()    ,   // email should be in format => string , email
        password : zod.string().min(8)        // pass should be in format => string and minimum 8 charcters
    })

    const response = schema.safeParse(obj)

    if(!response.success){
        console.log(response)
    } else {
        console.log(response)
    }
}


validateObject({
    email : "hello@gmail.com",
    password : "123pass123"
})