function binarySearch(arr, l, range, x) { 
    if(range >= l) { 
        let mid = l + Math.floor((range - l) / 2)
        console.log("mid awal => ", [mid],arr[mid] )

        if(arr[mid] == x){
            console.log("ketemu di index => ", [mid], arr[mid])
            return mid
        }

        if(arr[mid] > x) { 
            console.log("jika mid lebih besar dari "+x+". mid => ", mid)
            return binarySearch(arr, l, mid-1, x)
        }else {
            console.log("jika mid lebih kecil dari "+x+". mid => ", mid)
            return binarySearch(arr, mid+1, range , x)
        }
        
    } else { 
        console.log("tidak ketemu")
        return -1
    }
    
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],0,9,3))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],0,9,20))