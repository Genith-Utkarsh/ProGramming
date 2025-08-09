// we use type aliases to give types a name making code cleaner and safer

type Human = {
    name : string;
    age: number;
}


// we can assign the custom type to other variable to give it a type

let jacky : Human = {
    name : "Alan",
    age : 13
}

console.log(jacky)


type PrcticeSeries = number[]

const stockPrices: PrcticeSeries = [10, 23, 42, 42]

console.log(stockPrices)


// assiginin multiple types

type UserId = number | string
let id: UserId = "#253515"
console.log(id)