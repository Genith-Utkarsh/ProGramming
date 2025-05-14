let d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("hello")
    }, 3000)
})

function onDone()
{
    console.log(d)
}

console.log(d)
d.then(onDone)