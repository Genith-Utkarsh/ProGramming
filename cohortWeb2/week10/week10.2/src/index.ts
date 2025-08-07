import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient()

async function  insertUser(email : string, password : string , firstName : string, lastName : string) {
    const res =  await prisma.user.create({
        data : {
            email,
            firstName,
            lastName,
            password
        },
        select : {
            email : true,
            firstName : true,
            password : true
        }
    })

    console.log(res)
}


insertUser("Hikaru@gmail.com", "Hikaru", "Nakamura", "NakaHimaru123")

