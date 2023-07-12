let fruits = ["apple","banana","grape","mango","banana","orange","grape","cherry","banana"]

let newFruits = new Set(fruits)

newFruits.add("papaya")
newFruits.add("banana")

console.log(newFruits.has("banana"))
console.log(newFruits)
console.log(newFruits.size)