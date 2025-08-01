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


// interface User  {
//     firstName : string
//     lastName : string
//     age : number
//     email ?: string        // optional field   ?:
// }


// function isLegal(user : User){
//     if(user.age > 18){
//         return true
//     } else {
//         return false
//     }
// }


// isLegal({
//     firstName : "Utkarsh",
//     lastName : "Buva",
//     age : 18
// })





//   interface and class


 // blueprint or contract
// interface Person {
//     name : string
//     age : number
//     greet(phrase : string) : void
// }


// class Employee implements Person {
//     name : string
//     age : number

//     constructor(name: string , age: number){
//         this.name = name
//         this.age = age
//     }

//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name}`)
//     }
// }


// const e = new Employee("Alan", 22)
// console.log(e.greet("Hello"))






// Type


// (1) defining multiple types

// type numberOrString = number | string

// function greet(id: numberOrString){

// }



// (2)Union

type Manager = {
    name : string
    startDate : Date
}

interface Employee {
    name : string
    department : string
}


type Techlead = Employee & Manager

const teamLead : Techlead = {
    name : "Utkarsh",
    startDate : new Date(),
    department : "Blockchain dev"
}