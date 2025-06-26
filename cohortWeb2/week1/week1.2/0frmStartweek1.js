let userName = "Utkarsh"               // Camel Case
console.log("Hello" + userName + " Welcome to the course")


let age = 18

let isStudent  = true    // use small letters for boolean values

if(isStudent){
    console.log("You are a student")
}
else {
    console.log("You are not a student")
}


// ================================================



// if logic is repeated multiple times then we can use loops


// for loop
let total = 0
for(let i = 1 ; i <= 100 ; i++){
    total += i;  // total = total + i
}

console.log("Total sum of 1 to 100 is : ", total)



// ================================================





// array

// array is a collection of items

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
console.log("fruits array :", fruits)    // accessing the whole array

// accessing the first element of the array
console.log("First fruit is : ", fruits[0])
// accessing the second element of the array
console.log("Second fruit is : ", fruits[2])
// accessing the last element of the array
console.log("Last fruit is : ", fruits[fruits.length - 1])






// program to print th even number sin the array

let numArray = [23, 56, 45, 78, 23 , 76]

for(let i = 0; i < numArray.length ; i++){
    if(numArray[i] % 2 == 0){   // checking if the number is even
        console.log("Even number in the array : ", numArray[i])
    }
}




// Objects

const user1 = {
    naem : "Utkarsh",
    age : 18,
    isStudent : true,

}

console.log("Name of the user = ", user1.naem)


// array of objects

const users = [
    {
        firstName : "Ram",
        lastName : "Singh",
        isMale : true
    },
    {
        firstName : "Sita",
        lastName : "Devi",
        isMale : false
    },
    {
        firstName : "Shyam",
        lastName : "Yadav",
        isMale : true
    }
]


for(let i = 0; i < users.length ; i++){
    if(users[i].isMale){
        console.log(users[i].firstName)
    }
}

