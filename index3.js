// passing by value 
let name = "dimas"
let newName = name // passing 

newName = "Test"
console.log(name)

// passing by reference 
let person = {
    name:"Jhonny",
    age:26
}

let newPerson = person // passing

newPerson.name = "Dimas"

console.log(person.name)