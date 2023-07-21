function pascalTriangel(row) { 
    var result = []
    for(var i = 0; i < row; i++) { 
        var temp = []
        if(i == 0) { 
            temp.push(1)
        }else if(i == 1) { 
            temp.push(1,1)
        } else { 
            for(var j = 0; j <= i; j++) { 
                if(j == 0 || j == i) { 
                    temp.push(1)
                }else {
                   
                    temp.push( result[i-1][j-1] + result[i-1][j])
                }
            }
        }

        result.push(temp)
    }

    return result
}

console.log(pascalTriangel(2))

console.log(pascalTriangel(3))

console.log(pascalTriangel(4))

console.log(pascalTriangel(5))

console.log(pascalTriangel(6))