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
