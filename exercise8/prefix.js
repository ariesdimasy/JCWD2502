function prefix(arr) { 
    var result = ""
    // var shortest = Infinity
    // for(var i = 0; i < arr.length; i++) { 
    //     if(arr[i].length < shortest) { 
    //         shortest = arr[i].length
    //     }
    // }

    for(var j = 0; j < arr[0].length; j++) { 
        var temp = arr[0][j] // c
        for(var k = 0; k < arr.length; k++) { 
            if(arr[k][j] != temp) { 
                return result     
            } else if(arr[k][j] == temp && k == arr.length-1) {
                result += temp
            }
        }

    }

    return result
}

console.log(prefix(["car", "cat", "cattle"]))
console.log(prefix(["car", "bar", "battle"]))
console.log(prefix([
    "JCWD2404",
    "JCWD2504",
    "JCWD2500",
    "JCDM2000",
    "JCDM2001",
    "JCWD2501",
  ]))
  console.log(prefix(["apple", "app", "apricot"])); // Output: "ap"
  console.log(prefix(["car", "cat", "cattle"])); // Output: "ca"
  console.log(prefix(["race", "rack", "radio"])); // Output: "ra"
  console.log(prefix(["hello", "world"])); // Output: ""