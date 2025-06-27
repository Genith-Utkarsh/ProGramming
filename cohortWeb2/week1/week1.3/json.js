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

console.log(user.age) // accessing the property of object
console.log(user["age"])

console.log(user.userName) // accessing the property of object      
console.log(user["userName"])

const finalString = JSON.stringify(user)
console.log(finalString)


const newObj = JSON.parse(finalString) // creating object from the string
console.log(newObj);