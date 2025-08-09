// note : we do not use "="  sign here like type


interface Animal {
    name : string
}

const scooby: Animal = {
    name : "scooby"
}


// To inherit properties from existing interface we use : extends

interface Pet extends Animal {
    legs : number
}


const doggy : Pet = {
    name : "scooby",
    legs : 4
}

console.log(doggy.name)




interface Book {
    title : string
    author: string
    pages: number
}

interface Ebook extends Book {
    fileSizeMB : number
    format : string
}

