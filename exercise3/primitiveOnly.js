
function primitiveOnly(arr) { 
    var result = []
    for(var i = 0; i < arr.length; i++) { 
        if(typeof arr[i] == "function" || (typeof arr[i] == "object" && arr[i] != null) ) { 
            continue // skip
        } else { 
            result.push(arr[i])
        }
    }

    return result
}

// console.log(typeof "dimas") // primitive 
// console.log(typeof 23)
// console.log(typeof true)
// console.log(typeof 34.6)
// console.log(typeof Infinity)
// console.log(typeof {foo:"bar"}) // structur 
// console.log(typeof [1,2,3]) // structure
// console.log(typeof function(){}) // function not primitive 
// console.log(typeof null) // primitive 
// console.log(typeof undefined) // primitive 

console.log(primitiveOnly([1,"string",null,[], false, undefined,{}, 2, "yes",() => {},undefined]))