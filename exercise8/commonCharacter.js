function commonCharacter(str) { 
    var res = ""
    var resCount = 0
    for(var i = 0; i < str.length; i++) { 
        var counter = 0
        for(var j = i+1; j < str.length; j++) {
            if(str[i] == str[j]) { 
                counter += 1
            }
        }
        if(counter > resCount) {
            resCount = counter
            res = str[i]
        }
    }

    return res
}

console.log(commonCharacter("ARIES DIMAS YUDHISTIRA"))
console.log(commonCharacter("ABCCAABABBCCAABCCCCA"))
console.log(commonCharacter("VISUAL STUDIO CODE"))