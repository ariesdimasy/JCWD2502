function sortAlpha1(str) {
    return str.split("").sort().join("")
}

console.log(sortAlpha1("aries"))

function sortAlpha2(str) { 
    let strArr = str.split("")
    for(var i = 0; i < strArr.length; i++) { 
        var temp = ""
        for (var j = i+1; j < strArr.length; j++) {
            if(strArr[j] < strArr[i]) {
                temp = strArr[i]
                strArr[i] = strArr[j]
                strArr[j] = temp
            }
        }
    }
    return strArr.join("")
}

console.log(sortAlpha2("aries"))
