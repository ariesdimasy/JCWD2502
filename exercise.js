/* 
    2 = 1 , 2
    3 = 1 , 3 
    4 = 1 , 2 , 4
    5 = 1 , 5 
    6 = 1, 2 ,3 , 6
    7 = 1,(2, 6) 7

    8 = 1, (2 , 4,) , 8
    9 = 1, () 9
*/ 
var num = 9 // 2 - 8
var isPrime = true 

/* 
    nilai awal = 2
    nilai akhir = 8
    step = langkah mundur, langkah naik 

    i = i + 1
    i = i - 1
    i = i * 2 
    i = i / 2

    i += 1

    i++
*/

for (var i = 2; i < num ;i = i + 1) { 
    if(num % i === 0) { // 7 % 3 = 1      
        isPrime = false
        break
        //console.log("bukan bilangan prima")
    } 
}

if( isPrime) { 
    console.log(num+" ini bilangan prima")
} else { 
    console.log(num+" ini bukan bilangan prima")
}

// for (var i = 2; i < num ;i = i + 1) { 
//     if(num % i === 0) { // 7 % 3 = 1      
//         console.log("bukan bilangan prima")
//         break
//     } else { 
//         console.log(" bilangan prima")
//         break
//     }
// }



// console.log(num, isPrime)

// n = 14 => 1,2,3,4,5,6,7,8,9,10,11,12,13,14
var result = 0
var resultString = ""
for(var i = 1; i <= 14; i++) {
    if (i < 14) { 
        resultString += i+"+"
    } else { 
        resultString += i
    }
    
    result = result + i
}
// "1+2+3+4+5"

console.log(resultString+"="+result)

// var count = 0 // 2+1+1+1+1+1
// for(let i = 1; i <= 14; i++) {
//    //count++ // count = count + 1
//    count = count + 1
// }
// console.log(count)

// 5! = 5 * 4 * 3 * 2 * 1 = 120

/* 

***** 1,5 
**** 2,4 
*** 3,3
** 4,2 
* 5,1

*/

var num2 = 7
var str = "" // 7* 
for(var row = 1; row <= num2; row++) {
    // row = 2
    str = ""//                 7-2
    for(var star = 1; star <= num2-row+1; star++) { 
        str += "*" // str = str + "*"
    }
    console.log(str) // *****
}

// ANA => ANA
// KASUR => RUSAK
// KASUR INI RUSAK => KASUR INI RUSAK