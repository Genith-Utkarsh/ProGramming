// rate limitor

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let requestCount = 0;
function rateLimitorMiddleware(req, res, next) {
    requestCount++;
    
    if (requestCount > 5) {
        return res.status(429).json({
            msg: "Too many requests, please try again later."
     })
    }   

    setTimeout(() => {
        requestCount = 0
    }, 10000)

    next()
}


app.use(rateLimitorMiddleware);

app.get("/", (req, res) => {
    res.send(`Hey it request ${requestCount} times`);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});