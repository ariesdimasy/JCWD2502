function findSingle(arr) { 
    var result = []
    for(var i = 0; i < arr.length; i++) { 
        var single = true // flag 
        for(var j = 0; j < arr.length; j++) { 
            if(arr[i] === arr[j] && i !== j) { 
                single = false
                break
            }
        }
        if(single) { 
            result.push(arr[i])
        }
    }

    return result 
}

console.log(findSingle([1,2,2,3,4,2,5,3]))