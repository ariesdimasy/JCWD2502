function tangga(n) {
    if(n > 1) { 
                 //3              //2
        return tangga(n-1) + tangga(n-2)
    } else { 
        return 1 // 1 + 1 + 1 + 1 + 1 
    }
    
}

console.log(tangga(5))
console.log(tangga(1))
console.log(tangga(2))