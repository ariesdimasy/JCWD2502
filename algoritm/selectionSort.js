function selectionSort(arr) { 

    for(var i = 0; i < arr.length; i++) { 
       
        var temp = null
        for(var j = i+1; j < arr.length; j++) { 
            if (arr[j] < arr[i]) { 
               temp = arr[i]
               arr[i] = arr[j]
               arr[j] = temp           
            }
        }
    }

    return arr

}

console.log(selectionSort([10,50,30,70,80,90,60,20,40]))