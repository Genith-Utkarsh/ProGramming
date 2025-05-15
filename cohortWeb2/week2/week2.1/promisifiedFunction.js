function myPromisifiedFn(duration)
{
    let p = new Promise(function(resolve)
    {
        setTimeout(function(){
            resolve("Sucess")
        }, duration)
    })
    return p
}

let ans = myPromisifiedFn(10000)
console.log(ans)

ans.then(function(){
    console.log("Exceutes after the promise get resolved")
    console.log(ans)
})

console.log("HEy there after then ")