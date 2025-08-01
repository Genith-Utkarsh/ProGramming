"use strict";
// const x: number = 2
// console.log(x)
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("Alan", 22);
console.log(e.greet("Hello"));
