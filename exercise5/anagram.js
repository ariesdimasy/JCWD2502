function anagram(str, str2) { 
    var arr = str.split("")
    var arr2 = str2.split("")
    if(arr.length != arr2.length) { 
        return false
    }

    for(var i = 0; i < arr.length; i++) {
        var res = false
        for(var j = 0; j < arr2.length; j++) { 
            if(arr[i] == arr2[j] && (arr[i] != null || arr2[j] != null)) { 
                arr[i] = null
                arr2[j] = null
                res = true
                break
            }
        }
        if(!res) { 
            break
        }
    }

    return res
}

console.log(anagram("dimas", "samid"))
console.log(anagram("dimas","dimus"))