         //   10    15
function kpk(num1, num2) { 
    let min = num1 < num2 ? num1 : num2 // 10
    let max = num1 > num2 ? num1 : num2 // 15
    let i = 1
    do {   // 15 * 2 % 10 === 0
        if((max * i) % min === 0) {
            return max * i // 15 * 2 = 30  
        }
        i++ // 2
    } while(i <= min)
}

console.log(kpk(10,15))
console.log(kpk(5,7))