class animal {
    constructor(name, legCount, speaks)
    {
        this.name = name,
        this.legCount = legCount,
        this.speaks = speaks
    }

    static myString()
    {
        console.log("Part of class only")      // animal.myString()          can be call directly from class 
    }

    speak() {                                    // this function can't be directly called --> animal.speak()
        console.log(this.speaks)               // so we use in objects --> dog.speak()
    }

}

let dog = new animal("dog", 4, "Bhow Bhow")
let cat = new animal("cat", 4, "meow meow")    // Creating Object from Class


console.log(dog)
console.log(cat)               


