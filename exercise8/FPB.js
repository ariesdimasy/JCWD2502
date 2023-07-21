function fpb(num1, num2) { 
    /*
        6 => 6,3,2,1
    */
   let result = 0
   let i = 1
   let min = num1 < num2 ? num1 : num2
   while(i <= min ) { 
    if(num1 % i === 0 && num2 % i === 0) { 
        result = i
    }
    i++
   }

   return result
}

console.log(fpb(9,3))
console.log(fpb(10,15))
console.log(fpb(45,20))