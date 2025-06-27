const { error } = require("console");
const fs = require("fs")       // importing a fs  module


console.log(" 1)   Before async function")

// Async function
fs.readFile("a.txt", "utf-8", (err, data) =>{
    if(err){
        console.log("2)    Error reading file:", err);
        return;                
    }
    console.log("2)    File content : ", data)
})


console.log("3)    After file read async function")




// Read file synchro.......


const data  = fs.readFileSync("a.txt", "utf-8")
console.log(data)




// Write FIle


fs.writeFile("a.txt", "I changed the file content like hacker ....", (err) => {
    if (err) throw err
    else {
        console.log("FIle written")
    }
})