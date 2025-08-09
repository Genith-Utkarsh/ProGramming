// // 1)
// // type anotation

// let distance: number
// distance = 12
// console.log(distance)


// let isOnline: boolean
// isOnline = true
// console.log(isOnline)


// // any
// let anything: any = "HEy there"
// console.log(anything)

// anything =12
// console.log(anything)



// let city: string = "Kolhapur"
// let zipCode: number = 416230
// let isCapital: boolean= false

// console.log(city)
// console.log(zipCode)
// console.log(isCapital)





// Union type allows us to define multiple types for one variable 


// 1)

// let variable: number | string
// variable = "Hey there it is string"
// console.log(variable)

// variable = 100
// console.log(variable)




// // Union allows us to include null and undefined . they allows us to represent optional values

// let userName: string | null | undefined
// userName = null
// console.log(userName)





// 1)defining array in ts

// let numArray: number[]  = [1, 2, 3]
// let stringArray: string[] = ["Hello", "Hey", "How"]



// 2)Updating the elements in array

// let numArray: number[] = [1, 2, 4, 5,]
// numArray[0] = 0
// console.log(numArray)

// // adding element in arrau
// numArray.push(6)
// console.log(numArray)



// Creating the array where it can hold values of  different types

let stuff: (string | number)[] = ["Hey", 1 ,2, 5, "Shunar"]
console.log(stuff)

// we can make all types of mixed array using () 

