/*
 arr = [4,2] 
 num = 7
 result = [4,2,7]

 flag = false 
 7 == 4 false 
 7 == 2 false 


 arr = [1,2,3,4,5,6,7]
 num 5
 result = [1,2,3,4,5,6,7]

 flag = false 
 5 === 1 false 
 5 === 2 false
 5 === 3 false 
 5 === 4 false 
 5 === 5 true break

 1. check dulu angkanya ada atau tidak 

*/
function addArray2(arr, num) { 
    let result = ""
    
    for(var i = 0; i < arr.length; i++) { 
        if(num == arr[i] ) { 
           return "data sudah ada"
        }
    }
   
    arr.push(num)
    return arr    
}

console.log(addArray2([4,2] , 7))
console.log(addArray2([1,2,3,4,5,6,7], 5))