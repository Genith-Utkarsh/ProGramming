// creating string of object

// const users = '{"userName" : "Alan", "power" : "Music", "age" : 27 }'
// console.log(users)

// const user = JSON.parse(users)        // creating objectg from the string

// console.log(user);


const user = {
    userName : "Alan",
    age : 27,
    power : "Music"
}


const finalString = JSON.stringify(user)
console.log(finalString)