// COUNTER THAT COUNTS DOWN FROM 30 TO 0

let startCount = 30 

function displayCount()
{
    console.log(startCount)
    startCount--
}

for(let i = 0; i < 30 ; i++)
{
    setTimeout(displayCount, i * 1000)
}


// using setInterval






// create a terminal clock ??