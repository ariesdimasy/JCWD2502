class Employee {
    constructor(){
        this.workHours = 0
        this.totalSalary = 0
    }

    addWorkingHour(hours) { 
        this.workHours = this.workHours + hours
    }
}

class FulltimeEmployee extends Employee { 
    constructor(){
        super()
        this.salary = 0
    }

    calculateTotalSalary() { 
        if(this.workHours > 6) { 
            this.salary = 75000
        } else { 
            this.salary = 100000
        }
        this.totalSalary = this.workHours * this.salary
    }
}

class ParttimeEmployee extends Employee { 
    constructor(){
        super()
        this.salary = 0
    }

    calculateTotalSalary(){
        if(this.workHours > 6) {
            this.salary = 30000
        } else { 
            this.salary = 50000
        }
        this.totalSalary = this.workHours * this.salary
    }
}

var dimas = new FulltimeEmployee()
dimas.addWorkingHour(10)
dimas.calculateTotalSalary()
console.log(dimas)

var fadil = new ParttimeEmployee()
fadil.addWorkingHour(20)
fadil.calculateTotalSalary()
console.log(fadil)