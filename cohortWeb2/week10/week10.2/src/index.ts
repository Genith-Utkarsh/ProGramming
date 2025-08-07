import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient()

// async function  insertUser(email : string, password : string , firstName : string, lastName : string) {
//     const res =  await prisma.user.create({
//         data : {
//             email,
//             firstName,
//             lastName,
//             password
//         },
//         select : {
//             id : true,
//             email : true,
//             firstName : true,
//             password : true
//         }
//     })

//     console.log(res)
// }


// insertUser("Hikaru@gmail.com", "Hikaru", "Nakamura", "NakaHimaru123")




// Updating the user


interface UpdateParams {
    firstName : string
    lastName : string
}


async function updateUser(email : string , {firstName, lastName}: UpdateParams) {
    const res = await prisma.user.update({
        where : {email},
        data : {
            firstName,
            lastName
        }
    })

    console.log(res)
}


updateUser("Hikaru@gmail.com", {firstName : "Magnus", lastName : "carlsen"})