const numArr = [1, 2, 3, 4, 5]

const newArr = numArr.filter((i) => {
    if(i % 2 == 0){
        return true
    }
    else {
        return false
    }
})

console.log(newArr)