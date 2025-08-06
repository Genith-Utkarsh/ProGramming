import dotenv from "dotenv"
import { Client } from "pg"
dotenv.config()


const client = new Client({
    connectionString : process.env.neonDbStr
})




async function creatUsersTable() {
    await client.connect()

    const result = await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(50) UNIQUE NOT NULL, 
                username VARCHAR(255) UNIQUR NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `) 
}