// TO make some properties in object optional we make sign ?

interface Someone {
    email : string
    firstName? : string
    password : string | number
}

let person1 : Someone = {
    email : "Hikaru3@gmail.com",
    password: 123
}



// ReadOnly Properties prevent modifications after initialisation , keepinh the values constant


type Character = {
    readonly id : number;
    name : string;
}

let anna : Character = {
    id : 1,
    name : "ANna"
}