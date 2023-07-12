const [x,y] = [10,20]
const [a,setA] = [10,function(){}] // hooks
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

var { price, brand, speedLimit } = car

console.log(price, brand, speedLimit)

console.log(y, x)

var arr = [1,2,3,4,5]
var arr2 = [6,7,8,9,10]
var test1 = { foo:"bar", "bar":"foo"}
var test2 = {woos:"sah"}
var res3 = {...test1, ...test2}

var res = [...arr, arr2]

console.log(res3)