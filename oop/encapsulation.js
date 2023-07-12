class Employee {

    constructor(){
        this.name
    }

    getName() { 
        return this.name
    }

    setName(name) {
        if(typeof name === "string") { 
            this.name = name
        } else {
           throw new Error("name must be string")
        }
        
    }
}

var dimas = new Employee()
dimas.setName("Dimas")
dimas.getName()

console.log(dimas)