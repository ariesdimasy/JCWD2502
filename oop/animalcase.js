class Animal { 

    // name
    // age
    // isMammal

    constructor(name, age, isMammal) { 
        this.name = name
        this.age = age
        this.isMammal = isMammal
    }
}

class Rabbit extends Animal {
    constructor(name, age) { 
        super(name, age, true)
      
    }
   
    eat() { 
        return `${this.name} sedang makan`
    }
}

class Eagle extends Animal {
    constructor(name, age) { 
        super(name, age, false)
    }

    fly() {
        return `${this.name} sedang makan`
    }
}

let rabbit1 = new Rabbit("Rabbit1",7)
let falcon = new Eagle("falcon1",5)

console.log(rabbit1)
console.log(rabbit1.eat())

console.log(falcon)
console.log(falcon.fly())