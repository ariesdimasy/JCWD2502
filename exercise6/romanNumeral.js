function romanNumeral(numeral) { 
    var romanNum = { 
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }

    var strSplit = numeral.split("")
    var result = 0

    for(var i = 0; i < strSplit.length; i++) { 

        if(romanNum[strSplit[i]] < romanNum[strSplit[i+1]]) { 
            result += romanNum[strSplit[i+1]] - romanNum[strSplit[i]]
            i += 1// next 
        } else { 
            result += romanNum[strSplit[i]]
        }
    }

    return result
}

module.exports = {
    romanNumeral,
    test:() => {
        console.log("test in romanNumeral")
    }
}

// console.log(romanNumeral("XIX"))
// console.log(romanNumeral("MCIX"))