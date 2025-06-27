// printing even numbers present in the array

const arrNum = [23, 56, 45, 78, 23 , 76]

console.log("First element : ", arrNum[0])
console.log("Second element : ", arrNum[1])
console.log("Last  element : ", arrNum[arrNum.length - 1])




for(let i = 0; i < arrNum.length ; i++)
{
    if(arrNum[i] % 2 == 0)
    {
        console.log(arrNum[i]);
        
    }
}



// Printing Biggest Number in the array

let bigNum = 0

for(let i = 0; i < arrNum.length ; i++)
{
    if(bigNum < arrNum[i]) {
        bigNum = arrNum[i]
    }
}

console.log("Biggest Number in the array : ", bigNum);







// Array Methods
// 1. push() - adds an element to the end of the array
// 2. pop() - removes the last element from the array
// 3. unshift() - adds an element to the beginning of the array
// 4. shift() - removes the first element from the array
// 5. splice() - adds or removes elements from the array            
// 6. slice() - returns a shallow copy of a portion of an array
// 7. forEach() - executes a provided function once for each array element



const arr = [1, 2, 3, 4, 5];
arr.push(6)
arr.unshift(0)
arr.shift()
arr.pop()
console.log(arr);

const newArr = arr.map(element => element * 2 )// This will create a new array with each element multiplied by 2)

