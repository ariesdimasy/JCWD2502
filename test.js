// var days = 1000 

// var year = Math.floor(days / 365)
// // var month = Math.floor(days % 365 / 30)
// var month = Math.floor((days - (year * 365)) / 30 ) 
// var days2 = Math.floor(days - (year * 365) - (month * 30) )

// console.log(year, "year")
// console.log(month, "month")
// console.log(days2, "days")

// ========= ==============
/*
DEFINE panjang to 10 as number 
DEFINE lebar to 5 as number 
DEFINE luas as number 

SET luas equals to panjang MULTIPLY lebar 

PRINT luas
*/

// var panjang = 10 
// var lebar = 5
// var luas;

// luas = panjang * lebar

// console.log(luas)

// =========================

/* 
DEFINE panjang EQUALS to 10 as number 
DEFINE lebar EQUALS to 5 as number 
DEFINE keliling EQUALS to 0 as number 

keliling = 2 * (panjang + lebar)

PRINT keliling
*/

// var panjang = 10 
// var lebar = 5 
// var keliling = 0

// keliling = 2 * (panjang + lebar)

// console.log(keliling)

// ======================

/* 
DEFINE date1 equals to 2023-01-01 as date 
DEFINE date2 equals to 2023-10-02 as date

DEFINE diference date1 SUBSTRACT date2 

PRINT diference
*/   

var date1 = new Date("2023-01-01")
var date2 = new Date("2023-10-02")

var diference = (date1 - date2) / ( 24 * 3600 * 1000 )

console.log(Math.abs(diference))


