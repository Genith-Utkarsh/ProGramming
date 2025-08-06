import dotenv from "dotenv";
import { Client } from "pg";
// dotenv.config()

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_ByISUEdklQ72@ep-sweet-hill-a53vr6xq-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

// async function creatUsersTable() {
//     await client.connect()

//     const result = await client.query(`
//             CREATE TABLE users (
//                 id SERIAL PRIMARY KEY,
//                 email VARCHAR(50) UNIQUE NOT NULL,
//                 username VARCHAR(255) UNIQUE NOT NULL,
//                 password VARCHAR(255) NOT NULL,
//                 created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//             )
//         `)
//         console.log(result)
// }

// creatUsersTable()

async function insertData() {
  try {
    await client.connect()
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username2', 'test@gmail.com', 'Hello@123' )";
    const result = await client.query(insertQuery);
    console.log("Insertation of data successful", result);
  } catch (err) {
    console.log("Error duting insertion", err);
  } finally {
    client.end();
  }
}

insertData()