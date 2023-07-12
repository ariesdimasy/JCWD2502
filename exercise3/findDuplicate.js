/*
    [1,null,null,4,null,5,6,null,null] j

    [1,null,null,4,null,5,6,null,null] i

    [3,2] result 

    [1,2,3,3,4]

    [1,2,3,3,4]



*/

function findDuplicate(arr) { 
    var result = []
    for(var i = 0; i < arr.length; i++) { 
        var isSame = false
        for(var j = i+1; j < arr.length; j++) { 
            if(arr[i] == arr[j] && arr[i] !== null){ 
                arr[j] = null
                isSame = true 

            }
        }

        if(isSame === true) { 
            result.push(arr[i])
        }

    }

    return result
}

console.log(findDuplicate([1,2,3,3,4]))
console.log(findDuplicate([1,4,2,7,3,9,6,3,4,3,8]))