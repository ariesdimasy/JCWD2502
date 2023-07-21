function copyArray(arr) { 
    let newArray = []

    let loop = arr.length % 2 === 0 ? arr.length / 2 : Math.ceil(arr.length / 2)

    for(var i = 0; i < loop; i++) { 
        newArray.push(arr[i])
    }

    return newArray
}

console.log(copyArray([1,2,3,4,5,6,7]))
console.log(copyArray([1,2,3,4,5,6]))
console.log(copyArray([1,2,3,4,5]))