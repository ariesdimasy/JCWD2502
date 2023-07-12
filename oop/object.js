var key = "canRun"
/*
class Object 

tipe data array 
class Array
array yg kita buat adalah object dari class Array

tipe data boolean 
class Boolean
boolean yg kita buat adalah object dari class Boolean 

*/ 
var car = { 
    brand:"Mercedez",
    canRun:true, 
    price:1_000_000_000,
    speedLimit:200,
    another: { 
        color:"red",
        volume:1000
    },
    running:function() { 
        console.log("can run up to ", this.speedLimit)
    }
}

console.log(car)
console.log(car.price)
console.log(car["brand"])
console.log(car[key])

car.running()

car.shoot = 0

console.log(car)

car.price = 5_000_000_000

console.log(car)

// delete car.canRun

console.log(car)

car["jari jari"] = 12

console.log(car)

car[1] = "yooman"

console.log(" undefined ",car.another?.color)
// car.another ? car.another.color : car.another 

console.log(" undefined2 ",car.tidakAda?.color)
// car.tidakAda ? car.tidakAda.color : car.tidakAda

console.log(car)

console.log(car[1])

car[true] = "true"

console.log(car.true)

console.log(Object.keys(car), Object.keys(car.another))

for(key in car) { 
    console.log(key,"-->",car[key])
}