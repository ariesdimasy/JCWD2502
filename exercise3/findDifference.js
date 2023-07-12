/* 

    [1,2,3]


    [1,4,2]

    [3,4]


*/

function findDifference(arr1, arr2) {
    var result = []
   
    for(var i = 0; i < arr1.length; i++ ) { 
        var flag1 = false
        for(var j = 0; j < arr2.length; j++) { 
            if(arr1[i] === arr2[j]) {
                flag1 = true
                break
            }
        }


        if(flag1 === false ){
            result.push(arr1[i])
        }
    }

    for(var k = 0; k < arr2.length; k++){
        var flag2 = false
        for(var l = 0; l < arr1.length; l++) { 
            if(arr2[k] === arr1[l]) { 
                flag2 = true 
                break 
            }
        }

        if(flag2 === false) { 
            result.push(arr2[k])
        }
    }

    return result 
}

console.log(findDifference([1,2,3],[1,4,2]))