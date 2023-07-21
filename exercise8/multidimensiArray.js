function multidimensiArray(arr) { 
    var sum = 0
    for (var i of arr) { 
        for( var j of i) { 
            sum += j
        }
    }

    return sum
}

console.log(multidimensiArray([[1],[3,4,5],[1,2]]))