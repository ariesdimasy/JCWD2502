function addArray(arr1, arr2) { 
    var result = []
    for(var i = 0; i < arr1.length; i++) { 
        
        result.push(arr1[i] + arr2[i])
    }

    return result
}

console.log(addArray([1,2,3],[3,2,1]))