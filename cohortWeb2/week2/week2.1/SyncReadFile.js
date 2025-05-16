const fs = require("fs")
let data = fs.readFileSync("a.txt", "utf-8")

console.log(data)                                 // as above is Sync Function Threads will stuck there

console.log("After file read..")