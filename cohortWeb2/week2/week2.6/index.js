const numArr = [1, 2, 3, 4, 5]

// transform = (i) => {
//     return i * 2 
// }

// const newArr = numArr.map(transform)         // oldArray.map(Transfomation fun)


newArr = numArr.map((i) => {
    return 2 * i
})

console.log(newArr)