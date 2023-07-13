function excelCell(cell) { 
   
    let res = 0
    let cellLength = cell.length
    
    for(var i = 0; i < cellLength;  i++) {
        let charVal = findAlpha(cell[i]) // 10 
        res += (26 ** (cellLength-1-i)) * charVal
    }

    return res
}

function findAlpha(char) { 
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(var i = 0; i < alphabet.length; i++) { 
        if(char == alphabet[i]) { 
            return i+1
        }
    }
    return null
}

console.log(excelCell("ABC"))
console.log(excelCell("A"))
console.log(excelCell("AA"))
console.log(excelCell("CDE"))
console.log(excelCell("BD"))
console.log(excelCell("CDE"))
console.log(excelCell("BCDE"))
console.log(excelCell("ABDE"))
console.log(excelCell("ARIES"))
