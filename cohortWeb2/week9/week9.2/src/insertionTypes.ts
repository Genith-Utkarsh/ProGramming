// insertion types allows us to combie multiple types in single type

type Person = {
    userName : string;
}

type Employee = {
    employeeId : number;
}

type PersonEmployee = Person & Employee

let jhon: PersonEmployee = {
    userName : "ALan",
    employeeId : 12
}


console.log(jhon)