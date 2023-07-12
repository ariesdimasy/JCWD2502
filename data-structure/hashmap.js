// let myMap = { 
//     'David':'001',
//     "Buchanan":"002"
// }

const myMap = new Map()

myMap.set("David","001")
myMap.set("Buchanan","002")
// myMap.set("David","003")

console.log(myMap)
console.log(myMap.size)

for(let [key,val] of myMap) { 
    console.log(key ," and ",val )
}