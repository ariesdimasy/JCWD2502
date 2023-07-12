class User { 

    name = "Imu st. Nerona";
    age = 800
    #secret = "rahasia"
    static throne = true

    constructor(name, age) { 
        console.log(" object dibuat")
        if(name && age) {
            this.name = name;
            this.age = age
        }
        
        //this.#secret = "rahasia"
    }
    static playing() { 
        console.log("only classy person can play")
    }
    work() { 
        console.log(this.name," ini budak korporat")
    }
    getSecret() { 
        return this.#secret
    }
}

// console.log(User.work())

var dimas = new User()

// console.log(dimas.secret)
console.log(dimas.throne)
// console.log(dimas.playing())
console.log(User.throne)
User.playing()
// dimas.work()
// dimas.age = 20 
// dimas.play = true
// console.log(dimas)

// var imam = new User("Imam", 30)
// imam.work()

// console.log(imam)

// Array.is