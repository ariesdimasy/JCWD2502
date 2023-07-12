function secondSmallest(arr) { 
    var smallest = Infinity
    var smallestSecond = Infinity

    for(var i = 0; i < arr.length; i++) { 
        if(arr[i] < smallest) { 
            smallestSecond = smallest
            smallest = arr[i]
           
        } else if(arr[i] < smallestSecond && arr[i] != smallest) { 
            smallestSecond = arr[i]
        }
        console.log("smallestSecond ", smallestSecond)
        console.log("smallest ", smallest)
    }


}

console.log(secondSmallest([5,7,3,0,4,8,9,2,4,0]))