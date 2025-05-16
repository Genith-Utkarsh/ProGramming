function myPromisifiedFn()
{
    return new Promise(function(resolve)
{
    setTimeout(function(){
        resolve("Sucees you Quest is resolved..")
    }, 3000)
})
}

// myPromisifiedFn().then(function(data)
// {
//     console.log(data)
// })

async function myFnc(){
    let value =  await myPromisifiedFn()
    console.log(value)
}

myFnc()