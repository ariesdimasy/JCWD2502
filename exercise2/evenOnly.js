function evenOnly(arr) { 
    var newArr = []

    for(var i = 0; i < arr.length; i++ ) { 
        if(arr[i] % 2 === 0) { 
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log(evenOnly([2,3,4,6,1,2,3,5,6,7,8,4,6,3]))