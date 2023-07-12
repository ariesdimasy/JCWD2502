let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
]

// console.log(arr)
var result = [

]
var temp = [] // [1,1,1]
for(var i = 0; i < 3; i++) {
    temp = [] // <--- 1,1,1
    for(var j = 0; j < 3; j++) { 
        // temp = temp + temp[j]
        temp.push(1)
        
    }
    result.push(temp)
}

console.log(result)