const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;


app.use(express.json());

// Zod schema for user authentication
const authSchema = zod.object({
    username: zod.string().min(1, "Username is required"),
    password : zod.string().min(1, "Password is required"),
});


app.post("/auth", (req, res) => {
  
        // Validate request body against the schema
        const responce = authSchema.safeParse(req.body);
        if (!responce.success) {
            return res.status(400).json({
                msg : "Invalid request body",
            });
        }
        res.json({
            msg: "Authentication successful",
            data: responce.data,
            responce : responce

        })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});