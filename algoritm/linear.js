function searchLinear(arr, needle) { 
    for(var i = 0; i < arr.length; i++) { 
        if(arr[i] === needle) { 
            return i
        }
    }

    return -1
}

console.log(searchLinear([10,50,30,70,80,90,60,20,40], 20))
console.log(searchLinear([10,50,30,70,80,90,60,20,40], 87))

