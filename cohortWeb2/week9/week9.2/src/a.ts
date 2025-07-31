// const x: number = 2
// console.log(x)


// function greet(firstName : string, lastName : string, age : number, income : any){
//     console.log("Hello" + firstName)
// }

// greet("Alan", "Wallker", 20, 20000000000000)




// sum of two numbers 

// function sum(a : number, b: number): number {
//     return a + b
// }
// const value = sum
// console.log(value)



// if else 


// function isLegal(age: number): boolean {
//     if(age >= 18){
//         return true
//     } else{
//         return false
//     }
// }

// console.log(isLegal(2))





// Callback function

// fnName:  (Arguments) => Type for what it returns  eg, void, number, string, boolean etc


// function runAfter1sec(fnName: () => void ){
//     setTimeout(fnName, 1000)
// }

// runAfter1sec(function fnName(){
//     console.log("Hi")
// })




// Creating object in javascript


interface User  {
    firstName : string
    lastName : string
    age : number
    email ?: string        // optional field   ?:
}


function isLegal(user : User){
    if(user.age > 18){
        return true
    } else {
        return false
    }
}


isLegal({
    firstName : "Utkarsh",
    lastName : "Buva",
    age : 18
})