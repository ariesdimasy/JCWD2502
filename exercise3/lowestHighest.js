/*
[3,6,1,5,2,8,9,7] = index 7 length 8
[7,....]

lowest = 1
highest = 9


*/

function lowestHighest(arr) { 
    var lowest = arr[0]
    var highest = arr[0]
    var avg = arr[0]
                // 8 < 8 
    for(var i = 1; i < arr.length; i++) { 
        if(arr[i] < lowest) { 
            lowest = arr[i]
        }
        if(arr[i] > highest) {
            highest = arr[i]
        }
        avg = avg + arr[i]
    }

    avg = avg / arr.length

    return [lowest, highest, avg]
    
}

function lowestHighestSort(arr) { 
    var lowest = null
    var highest = null 
    var avg = null 

    arr.sort(function(a,b){
        return a - b
    })

    for ( item of arr ) { 
        avg += item
    }

    lowest = arr[0]
    highest = arr[arr.length -1]
    avg = avg / arr.length

    return [lowest, highest, avg]
}

console.log(lowestHighest([3,6,1,5,2,8,9,7]))
console.log(lowestHighestSort([3,6,1,5,2,8,9,7]))