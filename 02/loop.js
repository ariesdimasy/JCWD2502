/*
- nilai awal , initial state ( value )
- nilai akhir , kapan looping harus stop 
- step , langkahnya berapa ? apakah turun ? atau naik 

*/
// var i = 1
// for(;false;){  // i = 3 + 1 = 4
    
//     console.log(" langkah ke ",i)
    
//     if(i >= 3){
//         break;
//     }
//     i = i + 1 
// }
// // console.log(" diluar loop => ",i)
// var i = 1 
// while(i <= 3 ) { 
//     console.log("hello")
//     i++
// }

// do { 
//     console.log("hello")
//     i++ // i = 4
// } while (i <= 3)

for(var i = 1; i <= 5; i++ ) { 
    if ( i === 5 && i === 3) continue
    console.log(i)
}

/* 
DEFINE i EQUALS to 1

WHILE i LESS OR EQUALS TO 5 THEN
    IF i EQUALS to 5 AND i EQUALS to 3 
        THEN CONTINUE 
    PRINT i
    SET i EQUALS i PLUS 1

0+1+1+2+3+5+8+13
*/

console.log("1"+"2", "baris kedua")

/* 

5

*
**
***
****
*****

*****
****
***
**
*

*****
 ****
  ***
   **
    *

    *
   **
  ***
 ****
*****

*/
