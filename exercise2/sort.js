var arr = [10,2,6,8,9,4,15,6]

// (a,b) => a-b
function forSort(a,b) {
    console.log("a => ",a,"b => ",b)
    return a - b
}


function calculator(num, num2, callback) { 

   function add(num,num2) { 
    return num + num2
   }
   console.log(add(num,num2))
   callback()
}

console.log(arr.sort(forSort))

calculator(1,2,function() {
    console.log("hello")
    console.log("world")
})

setTimeout(function() { 

}, 3000)
