let user = { 
    firstName: "Aries",
    lastName: "Dimas",
    // merubah data 
    set fullName(value) { 
        var splitValue = value.split(" D ")
        this.firstName = splitValue[0]
        this.lastName = splitValue[1]
    },
    // mengambil, melihat data
    get fullName() {
        //return this.firstName+" "+this.lastName
        return `${user.firstName} ${user.lastName}`
    }
}

user.fullName = "Gol D Roger"
// console.log(user.fullName)
console.log(user.firstName, user.lastName)

var arr = [1,2,3]
arr.length = 10
console.log(arr.length)
console.log(arr)